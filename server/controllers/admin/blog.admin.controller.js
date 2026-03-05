const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const blogAdminService = require("../../services/admin/blog.admin.service");

// GET /api/v1/admin/blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  const result = await blogAdminService.getAllBlogs(req.query);
  return new ApiResponse(200, result, "Lấy danh sách bài viết thành công").send(
    res,
  );
});

// POST /api/v1/admin/blogs
const createBlog = asyncHandler(async (req, res) => {
  // req.user._id là ID của admin đang đăng nhập, gán làm author của bài viết
  const blog = await blogAdminService.createBlog(req.user._id, req.body);
  return new ApiResponse(201, blog, "Tạo bài viết thành công").send(res);
});

// PATCH /api/v1/admin/blogs/:id
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await blogAdminService.updateBlog(req.params.id, req.body);
  return new ApiResponse(200, blog, "Cập nhật bài viết thành công").send(res);
});

// DELETE /api/v1/admin/blogs/:id
const deleteBlog = asyncHandler(async (req, res) => {
  await blogAdminService.deleteBlog(req.params.id);
  return new ApiResponse(200, null, "Xóa bài viết thành công").send(res);
});

// GET /api/v1/admin/comments
const getComments = asyncHandler(async (req, res) => {
  const result = await blogAdminService.getComments(req.query);
  return new ApiResponse(
    200,
    result,
    "Lấy danh sách bình luận thành công",
  ).send(res);
});

// PATCH /api/v1/admin/comments/:id/status
const updateCommentStatus = asyncHandler(async (req, res) => {
  const comment = await blogAdminService.updateCommentStatus(
    req.params.id,
    req.body.isApproved,
  );
  const message = req.body.isApproved
    ? "Đã duyệt bình luận"
    : "Đã ẩn bình luận";
  return new ApiResponse(200, comment, message).send(res);
});

// DELETE /api/v1/admin/comments/:id
const deleteComment = asyncHandler(async (req, res) => {
  await blogAdminService.deleteComment(req.params.id);
  return new ApiResponse(200, null, "Xóa bình luận thành công").send(res);
});

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getComments,
  updateCommentStatus,
  deleteComment,
};
