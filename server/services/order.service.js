const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const Coupon = require("../models/Coupon");
const ApiError = require("../utils/ApiError");
const {
  getDisplayPriceFromProduct,
  calculateCouponDiscount,
} = require("./pricing.service");

const getMyOrders = async (userId, query) => {
  const page = Number(query.page || 1);
  const limit = Number(query.limit || 10);
  const skip = (page - 1) * limit;
  const filter = { user: userId };
  if (query.status) filter.status = query.status;

  const [items, total] = await Promise.all([
    Order.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Order.countDocuments(filter),
  ]);

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getMyOrderById = async (userId, orderId) => {
  const order = await Order.findOne({ _id: orderId, user: userId });
  if (!order) throw new ApiError(404, "Order not found");
  return order;
};

const checkoutFromCart = async (userId, payload) => {
  const session = await mongoose.startSession();
  const now = new Date();

  try {
    session.startTransaction();

    const cart = await Cart.findOne({ user: userId }).session(session);
    if (!cart || cart.items.length === 0) {
      throw new ApiError(400, "Cart is empty");
    }

    const productIds = cart.items.map((i) => i.product);
    const products = await Product.find({ _id: { $in: productIds } }).session(session);
    const productMap = new Map(products.map((p) => [String(p._id), p]));

    const orderItems = [];
    let subtotalRaw = 0;
    let subtotalAfterSale = 0;

    for (const cartItem of cart.items) {
      const product = productMap.get(String(cartItem.product));
      if (!product || !product.isActive) {
        throw new ApiError(400, "One or more products are unavailable");
      }
      if (product.stockQuantity < cartItem.quantity) {
        throw new ApiError(400, `Insufficient stock for product ${product.name}`);
      }

      const pricing = getDisplayPriceFromProduct(product, now);
      const unitPrice = pricing.finalPrice;
      const lineTotal = +(unitPrice * cartItem.quantity).toFixed(2);

      subtotalRaw += +(pricing.basePrice * cartItem.quantity).toFixed(2);
      subtotalAfterSale += lineTotal;

      orderItems.push({
        product: product._id,
        productName: product.name,
        productSlug: product.slug,
        sku: product.sku,
        image: (product.images && product.images[0]) || "",
        unitPrice,
        quantity: cartItem.quantity,
        lineTotal,
      });
    }

    for (const item of orderItems) {
      const result = await Product.updateOne(
        {
          _id: item.product,
          isActive: true,
          stockQuantity: { $gte: item.quantity },
        },
        { $inc: { stockQuantity: -item.quantity } },
        { session },
      );
      if (result.modifiedCount !== 1) {
        throw new ApiError(400, `Failed to reserve stock for product ${item.productName}`);
      }
    }

    let appliedCoupon = null;
    let couponDiscount = 0;
    const couponCode = String(payload.couponCode || "").trim().toUpperCase();

    if (couponCode) {
      const coupon = await Coupon.findOne({
        code: couponCode,
        isActive: true,
        startsAt: { $lte: now },
        endsAt: { $gt: now },
      }).session(session);

      if (!coupon) {
        throw new ApiError(400, "Invalid or expired coupon");
      }
      if (subtotalAfterSale < coupon.minOrderValue) {
        throw new ApiError(400, "Order does not meet coupon minimum value");
      }
      if (coupon.usageLimit != null && coupon.usedCount >= coupon.usageLimit) {
        throw new ApiError(400, "Coupon usage limit reached");
      }

      const usedByUser = await Order.countDocuments({
        user: userId,
        "coupon.code": coupon.code,
      }).session(session);

      if (usedByUser >= coupon.perUserLimit) {
        throw new ApiError(400, "Coupon per-user limit reached");
      }

      couponDiscount = +calculateCouponDiscount(coupon, subtotalAfterSale).toFixed(2);

      if (coupon.usageLimit != null) {
        const lock = await Coupon.updateOne(
          { _id: coupon._id, usedCount: { $lt: coupon.usageLimit } },
          { $inc: { usedCount: 1 } },
          { session },
        );
        if (lock.modifiedCount !== 1) {
          throw new ApiError(400, "Coupon usage limit reached");
        }
      } else {
        await Coupon.updateOne({ _id: coupon._id }, { $inc: { usedCount: 1 } }, { session });
      }

      appliedCoupon = {
        code: coupon.code,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
        discountAmount: couponDiscount,
      };
    }

    const saleDiscount = +(subtotalRaw - subtotalAfterSale).toFixed(2);
    const shippingFee = 0;
    const totalDiscount = +(saleDiscount + couponDiscount).toFixed(2);
    const total = +(subtotalAfterSale - couponDiscount + shippingFee).toFixed(2);

    const [order] = await Order.create(
      [
        {
          user: userId,
          items: orderItems,
          pricing: {
            subtotalRaw: +subtotalRaw.toFixed(2),
            saleDiscount,
            subtotal: +subtotalAfterSale.toFixed(2),
            couponDiscount,
            shippingFee,
            discount: totalDiscount,
            total,
          },
          coupon: appliedCoupon,
          shippingAddress: payload.shippingAddress,
          paymentMethod: payload.paymentMethod || "COD",
          note: payload.note || "",
          status: "Processing",
          statusHistory: [{ status: "Processing", changedBy: userId }],
        },
      ],
      { session },
    );

    await Cart.deleteOne({ user: userId }, { session });

    await session.commitTransaction();
    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

module.exports = {
  checkoutFromCart,
  getMyOrders,
  getMyOrderById,
};
