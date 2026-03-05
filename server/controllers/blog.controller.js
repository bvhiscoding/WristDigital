const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const blogService = require("../services/blog.service");

// GET /api/v1/blogs  [Public]
const getBlogs = asyncHandler(async (req, res) => {
  const result = await blogService.getBlogs(req.query);
  return new ApiResponse(200, result, "Lấy danh sách bài viết thành công").send(
    res,
  );
});

// GET /api/v1/blogs/:slug  [Public]
const getBlogBySlug = asyncHandler(async (req, res) => {
  const result = await blogService.getBlogBySlug(req.params.slug);
  return new ApiResponse(200, result, "Lấy bài viết thành công").send(res);
});

// POST /api/v1/blogs/:blogId/comments  [Protected]
const createComment = asyncHandler(async (req, res) => {
  const comment = await blogService.createComment(
    req.user._id,
    req.params.blogId,
    req.body,
  );
  return new ApiResponse(
    201,
    comment,
    "Bình luận đã được gửi và đang chờ admin duyệt",
  ).send(res);
});

module.exports = {
  getBlogs,
  getBlogBySlug,
  createComment,
};
