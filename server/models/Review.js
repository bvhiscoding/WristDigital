const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating thấp nhất là 1"],
      max: [5, "Rating cao nhất là 5"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minLength: [10, "Comment tối thiểu 10 ký tự"],
      maxLength: [1000, "Comment tối đa 1000 ký tự"],
    },
    images: [{ type: String }],
    isVerifiedPurchase: { type: Boolean, default: false },
    adminReply: { type: String, trim: true, default: null },
  },
  { timestamps: true },
);

reviewSchema.index({ user: 1, product: 1 }, { unique: true });
reviewSchema.index({ product: 1, createdAt: -1 });

// Static Method
reviewSchema.statics.recalcProductRating = async function (productId) {
  const stats = await this.aggregate([
    { $match: { product: productId } },
    {
      $group: {
        _id: "$product",
        avgRating: { $avg: "$rating" },
        count: { $sum: 1 },
      },
    },
  ]);

  const Product = mongoose.model("Product");

  if (stats.length > 0) {
    await Product.findByIdAndUpdate(productId, {
      averageRating: Math.round(stats[0].avgRating * 10) / 10,
      numReviews: stats[0].count,
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      averageRating: 0,
      numReviews: 0,
    });
  }
};

// Mongoose Middleware Hooks
reviewSchema.post("save", async function () {
  await this.constructor.recalcProductRating(this.product);
});

reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.recalcProductRating(doc.product);
  }
});

module.exports = mongoose.model("Review", reviewSchema);
