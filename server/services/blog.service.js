const Blog = require("../models/Blog");
const BlogComment = require("../models/BlogComment");
const ApiError = require("../utils/ApiError");

// Get Blogs list (Public)
const getBlogs = async (query) => {
  const page = query.page || 1;
  const limit = query.limit || 10;
  const skip = (page - 1) * limit;

  const filter = { isActive: true };

  if (query.tag) {
    filter.tags = query.tag.toLowerCase();
  }

  if (query.search) {
    filter.$text = { $search: query.search };
  }

  const [blogs, total] = await Promise.all([
    Blog.find(filter)
      .populate("author", "fullName avatar")
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

//  Blog detail by slug (Public)
const getBlogBySlug = async (slug) => {
  const blog = await Blog.findOneAndUpdate(
    { slug, isActive: true },
    { $inc: { views: 1 } },
    { new: true },
  ).populate("author", "fullName avatar");
  if (!blog) {
    throw new ApiError(404, "Bài viết không tồn tại");
  }

  //  view counter
  await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });

  const comments = await BlogComment.find({ blog: blog._id, isApproved: true })
    .populate("user", "fullName avatar")
    .sort({ createdAt: -1 })
    .limit(50);
  return { blog, comments };
};

// Comment on blog
const createComment = async (userId, blogId, body) => {
  const blogExists = await Blog.exists({ _id: blogId, isActive: true });
  if (!blogExists) {
    throw new ApiError(404, "Bài viết không tồn tại");
  }

  const comment = await BlogComment.create({
    user: userId,
    blog: blogId,
    content: body.content,
    isApproved: false,
  });

  return comment;
};

module.exports = {
  getBlogs,
  getBlogBySlug,
  createComment,
};
