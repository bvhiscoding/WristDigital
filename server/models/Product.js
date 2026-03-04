const mongoose = require("mongoose");
const colorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hexCode: { type: String, default: "" },
    stock: { type: Number, default: 0, min: 0 },
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
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
productSchema.index({ name: "text", description: "text" });
productSchema.index({ brand: 1, category: 1, price: 1, isActive: 1 });
module.exports = mongoose.model("Product", productSchema);
