const Review = require("../../models/Review");
const ApiError = require("../../utils/ApiError");

//  Admin get all Reviews
const getAllReviews = async (query) => {
  const page = query.page || 1;
  const limit = query.limit || 20;
  const skip = (page - 1) * limit;

  const filter = {};
  if (query.productId) filter.product = query.productId;
  if (query.rating) filter.rating = Number(query.rating);

  const [reviews, total] = await Promise.all([
    Review.find(filter)
      .populate("user", "fullName email")
      .populate("product", "name slug images")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Review.countDocuments(filter),
  ]);

  return {
    items: reviews,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

// Admin Reply 1 Review
const replyReview = async (reviewId, adminReply) => {
  const review = await Review.findByIdAndUpdate(
    reviewId,
    { adminReply },
    { new: true, runValidators: true },
  );
  if (!review) {
    throw new ApiError(404, "Review không tồn tại");
  }
  return review;
};

//  Admin delete Review (Rule violation)
const deleteReview = async (reviewId) => {
  const review = await Review.findByIdAndDelete(reviewId);
  if (!review) {
    throw new ApiError(404, "Review không tồn tại");
  }
};

module.exports = {
  getAllReviews,
  replyReview,
  deleteReview,
};
