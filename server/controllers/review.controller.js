const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const reviewService = require("../services/review.service");

// GET /api/v1/products/:productId/reviews
const getProductReviews = asyncHandler(async (req, res) => {
  const result = await reviewService.getProductReviews(
    req.params.productId,
    req.query,
  );
  return new ApiResponse(200, result, "Lấy danh sách reviews thành công").send(
    res,
  );
});

// POST /api/v1/products/:productId/reviews  [Protected]
const createReview = asyncHandler(async (req, res) => {
  const review = await reviewService.createReview(
    req.user._id,
    req.params.productId,
    req.body,
  );
  return new ApiResponse(201, review, "Đánh giá sản phẩm thành công").send(res);
});

// PATCH /api/v1/reviews/:id  [Protected]
const updateReview = asyncHandler(async (req, res) => {
  const review = await reviewService.updateReview(
    req.user._id,
    req.params.id,
    req.body,
  );
  return new ApiResponse(200, review, "Cập nhật đánh giá thành công").send(res);
});

// DELETE /api/v1/reviews/:id  [Protected]
const deleteReview = asyncHandler(async (req, res) => {
  await reviewService.deleteReview(req.user._id, req.params.id);
  return new ApiResponse(200, null, "Xóa đánh giá thành công").send(res);
});

module.exports = {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
};
