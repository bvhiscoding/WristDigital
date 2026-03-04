const mongoose = require("mongoose");
const Order = require("../../models/Order");
const Product = require("../../models/Product");
const ApiError = require("../../utils/ApiError");

const getOrderById = async (id) => {
  const order = await Order.findById(id).populate(
    "user",
    "fullName email phone",
  );
  if (!order) throw new ApiError(404, "Order not found");
  return order;
};

const updateOrderStatus = async (id, payload, adminId) => {
  const { status, note = "" } = payload;
  const order = await Order.findById(id);
  if (!order) throw new ApiError(404, "Order not found");
  if (order.status === status) return order;
  // Recommended business rule:
  // Processing -> Shipped/Cancelled
  // Shipped -> no change
  // Cancelled -> no change
  if (order.status === "Shipped") {
    throw new ApiError(400, "Shipped order cannot change status");
  }
  if (order.status === "Cancelled") {
    throw new ApiError(400, "Cancelled order cannot change status");
  }
  if (status === "Shipped") {
    order.status = "Shipped";
    order.shippedAt = new Date();
    order.statusHistory.push({
      status: "Shipped",
      changedBy: adminId,
      note,
    });
    await order.save();
    return order;
  }
  if (status === "Cancelled") {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      const txOrder = await Order.findById(id).session(session);
      if (!txOrder) throw new ApiError(404, "Order not found");
      if (txOrder.status !== "Processing") {
        throw new ApiError(400, "Only processing orders can be cancelled");
      }
      const bulkOps = txOrder.items.map((item) => ({
        updateOne: {
          filter: { _id: item.product },
          update: { $inc: { stockQuantity: item.quantity } },
        },
      }));
      if (bulkOps.length > 0) {
        await Product.bulkWrite(bulkOps, { session });
      }
      txOrder.status = "Cancelled";
      txOrder.cancelledAt = new Date();
      txOrder.statusHistory.push({
        status: "Cancelled",
        changedBy: adminId,
        note,
      });
      await txOrder.save({ session });
      await session.commitTransaction();
      return txOrder;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
  throw new ApiError(400, "Invalid status transition");
};

const listOrders = async (query) => {
  const page = Number(query.page || 1);
  const limit = Number(query.limit || 10);
  const skip = (page - 1) * limit;
  const filter = {};
  if (query.status) filter.status = query.status;
  const [items, total] = await Promise.all([
    Order.find(filter)
      .populate("user", "fullName email phone")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
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
module.exports = {
  listOrders,
  getOrderById,
  updateOrderStatus,
};
