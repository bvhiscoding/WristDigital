const Blog = require("../../models/Blog");
const BlogComment = require("../../models/BlogComment");
const ApiError = require("../../utils/ApiError");

// Hàm tiện ích tạo slug từ title
// Nếu admin không cung cấp slug, tự tạo từ title
const generateSlug = (title) =>
  title
    .toLowerCase()
    .normalize("NFD") // Chuẩn hóa Unicode (tách dấu khỏi ký tự gốc)
    .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu tiếng Việt (à → a, é → e, ...)
    .replace(/đ/g, "d") // Xử lý riêng chữ đ tiếng Việt
    .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu -
    .replace(/-+/g, "-"); // Gộp nhiều dấu --- thành 1 dấu -

// Admin get all Blogs (include draft)
const getAllBlogs = async (query) => {
  const page = query.page || 1;
  const limit = query.limit || 20;
  const skip = (page - 1) * limit;

  const filter = {};
  // Admin dont filter isActive
  if (query.tag) filter.tags = query.tag.toLowerCase();

  const [blogs, total] = await Promise.all([
    Blog.find(filter)
      .populate("author", "fullName")
      .select("-content")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Blog.countDocuments(filter),
  ]);

  return {
    items: blogs,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

//  Admin create blog
const createBlog = async (adminUserId, body) => {
  let slug = body.slug || generateSlug(body.title);
  const existingBlog = await Blog.findOne({ slug });
  if (existingBlog) {
    slug = `${slug}-${Date.now()}`;
  }

  const blog = await Blog.create({
    title: body.title,
    slug,
    content: body.content,
    author: adminUserId,
    thumbnail: body.thumbnail || null,
    tags: body.tags || [],
    isActive: body.isActive ?? false,
  });

  return blog;
};

//  Admin update blog
const updateBlog = async (blogId, body) => {
  if (body.title && !body.slug) {
    body.slug = generateSlug(body.title);
  }

  const blog = await Blog.findByIdAndUpdate(blogId, body, {
    new: true,
    runValidators: true,
  });
  if (!blog) throw new ApiError(404, "Bài viết không tồn tại");
  return blog;
};

//  Admin delete blog
const deleteBlog = async (blogId) => {
  const blog = await Blog.findByIdAndDelete(blogId);
  if (!blog) throw new ApiError(404, "Bài viết không tồn tại");

  await BlogComment.deleteMany({ blog: blogId });
};

//  Admin get comments to approve
const getComments = async (query) => {
  const page = query.page || 1;
  const limit = query.limit || 20;
  const skip = (page - 1) * limit;

  const filter = {};

  if (query.isApproved !== undefined) {
    filter.isApproved = query.isApproved === "true";
  }

  const [comments, total] = await Promise.all([
    BlogComment.find(filter)
      .populate("user", "fullName email")
      .populate("blog", "title slug")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    BlogComment.countDocuments(filter),
  ]);

  return {
    items: comments,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

//  Admin update comment status
const updateCommentStatus = async (commentId, isApproved) => {
  const comment = await BlogComment.findByIdAndUpdate(
    commentId,
    { isApproved },
    { new: true },
  );
  if (!comment) throw new ApiError(404, "Comment không tồn tại");
  return comment;
};

//  Admin delete violation comment
const deleteComment = async (commentId) => {
  const comment = await BlogComment.findByIdAndDelete(commentId);
  if (!comment) throw new ApiError(404, "Comment không tồn tại");
};

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getComments,
  updateCommentStatus,
  deleteComment,
};
