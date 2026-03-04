const mongoose = require("mongoose");
const colorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hexCode: { type: String, default: "" },
    stock: { type: Number, default: 0, min: 0 },
  },
  { _id: false },
);

const activeSaleSchema = new mongoose.Schema(
  {
    saleId: { type: mongoose.Schema.Types.ObjectId, ref: "Sale" },
    saleName: { type: String, default: "" },
    discountType: { type: String, enum: ["PERCENT", "FIXED"] },
    discountValue: { type: Number, min: 0 },
    salePrice: { type: Number, min: 0 },
    startsAt: { type: Date },
    endsAt: { type: Date },
    priority: { type: Number, default: 0 },
  },
  { _id: false },
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product name is required"], trim: true },
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: { type: String, required: [true, "Product description is required"] },
    sku: { type: String, required: [true, "Product SKU is required"], unique: true, trim: true },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Product brand is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Product category is required"],
    },
    price: { type: Number, required: [true, "Product price is required"], min: 0 },
    discountPrice: { type: Number, default: null, min: 0 },
    productType: {
      type: String,
      enum: ["Smartwatch", "Accessory"],
      required: [true, "Product type is required"],
    },
    stockQuantity: { type: Number, default: 0, min: [0, "Stock quantity must be at least 0"] },
    images: [{ type: String }],
    averageRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    specifications: { type: mongoose.Schema.Types.Mixed, default: {} },
    colors: [colorSchema],
    activeSale: { type: activeSaleSchema, default: null },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

productSchema.virtual("baseSellPrice").get(function () {
  return this.discountPrice != null ? this.discountPrice : this.price;
});

productSchema.virtual("displayPrice").get(function () {
  const base = this.baseSellPrice;
  if (!this.activeSale) return base;

  const now = new Date();
  const isSaleValid =
    this.activeSale.startsAt &&
    this.activeSale.endsAt &&
    this.activeSale.startsAt <= now &&
    this.activeSale.endsAt > now;

  if (!isSaleValid) return base;

  return Math.min(base, this.activeSale.salePrice || base);
});

productSchema.virtual("isOnSale").get(function () {
  return this.displayPrice < this.baseSellPrice;
});

productSchema.index({ name: "text", description: "text" });
productSchema.index({ brand: 1, category: 1, price: 1, isActive: 1 });
module.exports = mongoose.model("Product", productSchema);
