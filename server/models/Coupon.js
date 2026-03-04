const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Coupon code is required"],
      unique: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    description: { type: String, default: "" },
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
    maxDiscount: {
      type: Number,
      default: null,
      min: 0,
    },
    minOrderValue: {
      type: Number,
      default: 0,
      min: 0,
    },
    usageLimit: {
      type: Number,
      default: null,
      min: 1,
    },
    usedCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    perUserLimit: {
      type: Number,
      default: 1,
      min: 1,
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

couponSchema.index({ isActive: 1, startsAt: 1, endsAt: 1 });

couponSchema.pre("validate", function (next) {
  if (this.endsAt && this.startsAt && this.endsAt <= this.startsAt) {
    return next(new Error("Coupon endsAt must be greater than startsAt"));
  }
  if (this.discountType === "PERCENT" && this.discountValue > 100) {
    return next(new Error("Percent coupon cannot exceed 100"));
  }
  next();
});

module.exports = mongoose.model("Coupon", couponSchema);
