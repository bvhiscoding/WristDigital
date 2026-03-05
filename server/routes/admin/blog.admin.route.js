const express = require("express");
const router = express.Router();

const validate = require("../../middlewares/validate.middleware");
const blogAdminController = require("../../controllers/admin/blog.admin.controller");
const {
  createBlogSchema,
  updateBlogSchema,
  blogQuerySchema,
  approveCommentSchema,
  commentQuerySchema,
} = require("../../validations/interaction.validation");

// Blog CRUD
// GET  /api/v1/admin/blogs
router.get(
  "/blogs",
  validate(blogQuerySchema),
  blogAdminController.getAllBlogs,
);

// POST /api/v1/admin/blogs
router.post(
  "/blogs",
  validate(createBlogSchema),
  blogAdminController.createBlog,
);

// PATCH /api/v1/admin/blogs/:id
router.patch(
  "/blogs/:id",
  validate(updateBlogSchema),
  blogAdminController.updateBlog,
);

// DELETE /api/v1/admin/blogs/:id
router.delete("/blogs/:id", blogAdminController.deleteBlog);

// Comment Management
// GET  /api/v1/admin/comments
router.get(
  "/comments",
  validate(commentQuerySchema),
  blogAdminController.getComments,
);

// PATCH /api/v1/admin/comments/:id/status
router.patch(
  "/comments/:id/status",
  validate(approveCommentSchema),
  blogAdminController.updateCommentStatus,
);

// DELETE /api/v1/admin/comments/:id
router.delete("/comments/:id", blogAdminController.deleteComment);

module.exports = router;
