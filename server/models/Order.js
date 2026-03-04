const mongoose = require("mongoose");
const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: { type: String, required: true },
    productSlug: { type: String, required: true },
    sku: { type: String, required: true },
    image: { type: String, default: "" },
    unitPrice: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
    lineTotal: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);
const statusHistorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["Processing", "Shipped", "Cancelled"],
      required: true,
    },
    changedAt: { type: Date, default: Date.now },
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    note: { type: String, default: "" },
  },
  { _id: false },
);
const shippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, default: "", trim: true },
    country: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const appliedCouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    discountType: { type: String, enum: ["PERCENT", "FIXED"], required: true },
    discountValue: { type: Number, required: true, min: 0 },
    discountAmount: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "Order must contain at least one item",
      },
    },
    pricing: {
      subtotalRaw: { type: Number, required: true, min: 0 },
      saleDiscount: { type: Number, default: 0, min: 0 },
      subtotal: { type: Number, required: true, min: 0 },
      couponDiscount: { type: Number, default: 0, min: 0 },
      shippingFee: { type: Number, default: 0, min: 0 },
      discount: { type: Number, default: 0, min: 0 },
      total: { type: Number, required: true, min: 0 },
    },
    coupon: {
      type: appliedCouponSchema,
      default: null,
    },
    shippingAddress: {
      type: shippingAddressSchema,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "BANK_TRANSFER"],
      default: "COD",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    status: {
      type: String,
      enum: ["Processing", "Shipped", "Cancelled"],
      default: "Processing",
      index: true,
    },
    note: { type: String, default: "" },
    shippedAt: { type: Date, default: null },
    cancelledAt: { type: Date, default: null },
    statusHistory: {
      type: [statusHistorySchema],
      default: [{ status: "Processing" }],
    },
  },
  { timestamps: true },
);
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1, createdAt: -1 });
orderSchema.index({ "coupon.code": 1 });
module.exports = mongoose.model("Order", orderSchema);
