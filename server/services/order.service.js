const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");

const getSellPrice = (product) => {
  return product.discountPrice != null ? product.discountPrice : product.price;
};

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

  try {
    session.startTransaction();
    const cart = await Cart.findOne({ user: userId }).session(session);
    if (!cart || cart.items.length === 0) {
      throw new ApiError(400, "Cart is empty");
    }

    const productIds = cart.items.map((i) => i.product);
    const products = await Product.find({ _id: { $in: productIds } }).session(
      session,
    );
    const productMap = new Map(products.map((p) => [String(p._id), p]));

    const orderItems = [];
    let subtotal = 0;

    for (const cartItem of cart.items) {
      const product = productMap.get(String(cartItem.product));
      if (!product || !product.isActive) {
        throw new ApiError(400, "One or more products are unavailable");
      }
      if (product.stockQuantity < cartItem.quantity) {
        throw new ApiError(
          400,
          `Insufficient stock for product ${product.name}`,
        );
      }
      const unitPrice = getSellPrice(product);
      const lineTotal = unitPrice * cartItem.quantity;
      subtotal += lineTotal;

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
        throw new ApiError(
          400,
          `Failed to reserve stock for product ${item.productName}`,
        );
      }
    }
    const shippingFee = 0;
    const discount = 0;
    const total = subtotal + shippingFee - discount;

    const [order] = await Order.create(
      [
        {
          user: userId,
          items: orderItems,
          pricing: { subtotal, shippingFee, discount, total },
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
