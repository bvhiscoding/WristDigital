const mongoose = require("mongoose");
const Review = require("../models/Review");
const Product = require("../models/Product");
const Order = require("../models/Order");
const ApiError = require("../utils/ApiError");

// Public
const getProductReviews = async (productId, query) => {
  const productExists = await Product.exists({
    _id: productId,
    isActive: true,
  });
  if (!productExists) throw new ApiError(404, "Sản phẩm không tồn tại");

  const page = query.page || 1;
  const limit = query.limit || 10;
  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    Review.find({ product: productId })
      .populate("user", "fullName avatar")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Review.countDocuments({ product: productId }),
  ]);

  return {
    items: reviews,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const createReview = async (userId, productId, body) => {
  const product = await Product.findOne({ _id: productId, isActive: true });
  if (!product) throw new ApiError(404, "Sản phẩm không tồn tại");

  const hasPurchased = await Order.exists({
    user: userId,
    "items.product": new mongoose.Types.ObjectId(productId),
    paymentStatus: "Paid",
  });

  try {
    const review = await Review.create({
      user: userId,
      product: productId,
      rating: body.rating,
      comment: body.comment,
      images: body.images || [],
      isVerifiedPurchase: !!hasPurchased,
    });

    return review;
  } catch (err) {
    if (err.code === 11000) {
      throw new ApiError(409, "Bạn đã đánh giá sản phẩm này rồi");
    }
    throw err;
  }
};

const updateReview = async (userId, reviewId, body) => {
  const review = await Review.findOne({ _id: reviewId, user: userId });
  if (!review)
    throw new ApiError(404, "Review không tồn tại hoặc bạn không có quyền");

  if (body.rating !== undefined) review.rating = body.rating;
  if (body.comment !== undefined) review.comment = body.comment;
  if (body.images !== undefined) review.images = body.images;

  await review.save();
  return review;
};

const deleteReview = async (userId, reviewId) => {
  const review = await Review.findOneAndDelete({ _id: reviewId, user: userId });
  if (!review)
    throw new ApiError(404, "Review không tồn tại hoặc bạn không có quyền");
};

module.exports = {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
};
