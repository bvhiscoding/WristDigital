const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const reviewAdminService = require("../../services/admin/review.admin.service");

// GET /api/v1/admin/reviews
const getAllReviews = asyncHandler(async (req, res) => {
  const result = await reviewAdminService.getAllReviews(req.query);
  return new ApiResponse(200, result, "Lấy danh sách reviews thành công").send(
    res,
  );
});

// PATCH /api/v1/admin/reviews/:id/reply
const replyReview = asyncHandler(async (req, res) => {
  const review = await reviewAdminService.replyReview(
    req.params.id,
    req.body.adminReply,
  );
  return new ApiResponse(200, review, "Trả lời review thành công").send(res);
});

// DELETE /api/v1/admin/reviews/:id
const deleteReview = asyncHandler(async (req, res) => {
  await reviewAdminService.deleteReview(req.params.id);
  return new ApiResponse(200, null, "Xóa review thành công").send(res);
});

module.exports = {
  getAllReviews,
  replyReview,
  deleteReview,
};
