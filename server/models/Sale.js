const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Sale name is required"],
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    discountType: {
      type: String,
      enum: ["PERCENT", "FIXED"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
      min: 0,
    },
    scope: {
      type: String,
      enum: ["ALL", "PRODUCTS", "CATEGORIES", "BRANDS"],
      default: "ALL",
    },
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    brandIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],
    priority: {
      type: Number,
      default: 0,
    },
    startsAt: {
      type: Date,
      required: true,
    },
    endsAt: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

saleSchema.index({ isActive: 1, startsAt: 1, endsAt: 1, priority: -1 });

saleSchema.pre("validate", function (next) {
  if (this.endsAt && this.startsAt && this.endsAt <= this.startsAt) {
    return next(new Error("Sale endsAt must be greater than startsAt"));
  }
  if (this.discountType === "PERCENT" && this.discountValue > 100) {
    return next(new Error("Percent sale cannot exceed 100"));
  }

  if (this.scope === "PRODUCTS" && (!this.productIds || this.productIds.length === 0)) {
    return next(new Error("productIds is required for PRODUCTS scope"));
  }
  if (
    this.scope === "CATEGORIES" &&
    (!this.categoryIds || this.categoryIds.length === 0)
  ) {
    return next(new Error("categoryIds is required for CATEGORIES scope"));
  }
  if (this.scope === "BRANDS" && (!this.brandIds || this.brandIds.length === 0)) {
    return next(new Error("brandIds is required for BRANDS scope"));
  }

  next();
});

module.exports = mongoose.model("Sale", saleSchema);
