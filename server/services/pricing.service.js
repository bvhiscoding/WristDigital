const Product = require("../models/Product");
const Sale = require("../models/Sale");

const getBaseSellPrice = (product) =>
  product.discountPrice != null ? product.discountPrice : product.price;

const calculateDiscountedPrice = (basePrice, discountType, discountValue) => {
  if (discountType === "PERCENT") {
    return Math.max(0, +(basePrice * (1 - discountValue / 100)).toFixed(2));
  }
  return Math.max(0, +(basePrice - discountValue).toFixed(2));
};

const isSaleActiveNow = (sale, now = new Date()) =>
  sale.isActive && sale.startsAt <= now && sale.endsAt > now;

const productMatchesSaleScope = (product, sale) => {
  if (sale.scope === "ALL") return true;
  if (sale.scope === "PRODUCTS") {
    return sale.productIds.some((id) => String(id) === String(product._id));
  }
  if (sale.scope === "CATEGORIES") {
    return sale.categoryIds.some((id) => String(id) === String(product.category));
  }
  if (sale.scope === "BRANDS") {
    return sale.brandIds.some((id) => String(id) === String(product.brand));
  }
  return false;
};

const chooseBestSaleForProduct = (product, sales, now = new Date()) => {
  const base = getBaseSellPrice(product);
  let best = null;
  let bestPrice = base;

  for (const sale of sales) {
    if (!isSaleActiveNow(sale, now)) continue;
    if (!productMatchesSaleScope(product, sale)) continue;

    const candidate = calculateDiscountedPrice(
      base,
      sale.discountType,
      sale.discountValue,
    );
    if (candidate < bestPrice) {
      bestPrice = candidate;
      best = sale;
    } else if (candidate === bestPrice && best && sale.priority > best.priority) {
      best = sale;
    }
  }

  if (!best || bestPrice >= base) return null;

  return {
    saleId: best._id,
    saleName: best.name,
    discountType: best.discountType,
    discountValue: best.discountValue,
    salePrice: bestPrice,
    startsAt: best.startsAt,
    endsAt: best.endsAt,
    priority: best.priority,
  };
};

const recalculateProductSaleSnapshots = async ({ productIds = null } = {}) => {
  const now = new Date();
  const productFilter = productIds?.length ? { _id: { $in: productIds } } : {};

  const [products, sales] = await Promise.all([
    Product.find(productFilter).select("price discountPrice brand category"),
    Sale.find({ isActive: true, startsAt: { $lte: now }, endsAt: { $gt: now } }).lean(),
  ]);

  if (products.length === 0) return { updated: 0 };

  const ops = [];
  for (const product of products) {
    const snapshot = chooseBestSaleForProduct(product, sales, now);

    if (snapshot) {
      ops.push({
        updateOne: {
          filter: { _id: product._id },
          update: {
            $set: {
              activeSale: snapshot,
            },
          },
        },
      });
    } else {
      ops.push({
        updateOne: {
          filter: { _id: product._id },
          update: {
            $unset: { activeSale: "" },
          },
        },
      });
    }
  }

  if (ops.length > 0) {
    await Product.bulkWrite(ops);
  }

  return { updated: ops.length };
};

const getDisplayPriceFromProduct = (product, now = new Date()) => {
  const base = getBaseSellPrice(product);
  const sale = product.activeSale;

  if (!sale) return { basePrice: base, finalPrice: base, saleDiscount: 0 };

  const isValid = sale.startsAt <= now && sale.endsAt > now;
  if (!isValid) return { basePrice: base, finalPrice: base, saleDiscount: 0 };

  const finalPrice = Math.min(base, sale.salePrice);
  return {
    basePrice: base,
    finalPrice,
    saleDiscount: +(base - finalPrice).toFixed(2),
  };
};

const calculateCouponDiscount = (coupon, subtotalAfterSale) => {
  if (coupon.discountType === "PERCENT") {
    let discount = +(subtotalAfterSale * (coupon.discountValue / 100)).toFixed(2);
    if (coupon.maxDiscount != null) {
      discount = Math.min(discount, coupon.maxDiscount);
    }
    return discount;
  }
  return Math.min(subtotalAfterSale, coupon.discountValue);
};

module.exports = {
  getBaseSellPrice,
  calculateDiscountedPrice,
  recalculateProductSaleSnapshots,
  getDisplayPriceFromProduct,
  calculateCouponDiscount,
};
