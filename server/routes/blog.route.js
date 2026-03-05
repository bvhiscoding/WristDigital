const express = require("express");
const router = express.Router();

const protect = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const blogController = require("../controllers/blog.controller");
const {
  blogQuerySchema,
  createCommentSchema,
} = require("../validations/interaction.validation");

// GET /api/v1/blogs   Public
router.get("/", validate(blogQuerySchema), blogController.getBlogs);

// GET /api/v1/blogs/:slug   Public
router.get("/:slug", blogController.getBlogBySlug);

// POST /api/v1/blogs/:blogId/comments  → Private
router.post(
  "/:blogId/comments",
  protect,
  validate(createCommentSchema),
  blogController.createComment,
);

module.exports = router;
