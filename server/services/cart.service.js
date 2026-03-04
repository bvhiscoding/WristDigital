const Cart = require("../models/Cart");
const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");

const getSellPrice = (product) => {
  return product.discountPrice != null ? product.discountPrice : product.price;
};

const formatCart = (cart) => {
  if (!cart) {
    return {
      items: [],
      summary: { itemCount: 0, subtotal: 0 },
    };
  }
  const items = cart.items
    .filter((i) => i.product)
    .map((i) => {
      const unitPrice = getSellPrice(i.product);
      const lineTotal = unitPrice * i.quantity;
      return {
        product: {
          _id: i.product._id,
          name: i.product.name,
          slug: i.product.slug,
          sku: i.product.sku,
          images: i.product.images || [],
          stockQuantity: i.product.stockQuantity,
          isActive: i.product.isActive,
        },
        quantity: i.quantity,
        unitPrice,
        lineTotal,
      };
    });
  const subtotal = items.reduce((sum, i) => sum + i.lineTotal, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  return {
    items,
    summary: {
      itemCount,
      subtotal,
    },
  };
};

const getMyCart = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate(
    "items.product",
    "name slug sku images stockQuantity price discountPrice isActive",
  );
  return formatCart(cart);
};

const addToCart = async (userId, payload) => {
  const { productId, quantity } = payload;
  const product = await Product.findById(productId).select(
    "name slug sku images stockQuantity price discountPrice isActive",
  );
  if (!product || !product.isActive) {
    throw new ApiError(404, "Product not found or inactive");
  }
  if (product.stockQuantity < quantity) {
    throw new ApiError(400, "Insufficient stock");
  }
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  } else {
    const idx = cart.items.findIndex(
      (i) => String(i.product) === String(productId),
    );
    if (idx >= 0) {
      const nextQty = cart.items[idx].quantity + quantity;
      if (nextQty > product.stockQuantity) {
        throw new ApiError(400, "Insufficient stock for requested quantity");
      }
      cart.items[idx].quantity = nextQty;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
  }
  const populated = await Cart.findOne({ user: userId }).populate(
    "items.product",
    "name slug sku images stockQuantity price discountPrice isActive",
  );
  return formatCart(populated);
};

const updateCartItemQuantity = async (userId, productId, payload) => {
  const { quantity } = payload;
  const [cart, product] = await Promise.all([
    Cart.findOne({ user: userId }),
    Product.findById(productId).select(
      "name slug sku images stockQuantity price discountPrice isActive",
    ),
  ]);
  if (!cart) throw new ApiError(404, "Cart not found");
  if (!product || !product.isActive) {
    throw new ApiError(404, "Product not found or inactive");
  }
  if (product.stockQuantity < quantity) {
    throw new ApiError(400, "Insufficient stock");
  }
  const idx = cart.items.findIndex(
    (i) => String(i.product) === String(productId),
  );
  if (idx < 0) throw new ApiError(404, "Item not found in cart");
  cart.items[idx].quantity = quantity;
  await cart.save();
  const populated = await Cart.findOne({ user: userId }).populate(
    "items.product",
    "name slug sku images stockQuantity price discountPrice isActive",
  );
  return formatCart(populated);
};

const removeFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }
  const before = cart.items.length;
  cart.items = cart.items.filter(
    (i) => String(i.product) !== String(productId),
  );
  if (cart.items.length === before) {
    throw new ApiError(404, "Item not found in cart");
  }
  await cart.save();
  const populated = await Cart.findOne({ user: userId }).populate(
    "items.product",
    "name slug sku images stockQuantity price discountPrice isActive",
  );
  return formatCart(populated);
};

const clearCart = async (userId) => {
  await Cart.deleteOne({ user: userId });
  return { message: "Cart cleared successfully" };
};

module.exports = {
  getMyCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
};
