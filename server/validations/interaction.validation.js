const { z } = require("zod");

// Review Validations
const reviewBodySchema = z.object({
  rating: z
    .number({ invalid_type_error: "Rating phải là number" })
    .int("Rating phải là số nguyên")
    .min(1)
    .max(5),
  comment: z.string().min(10, "Comment tối thiểu 10 ký tự").max(1000),
  images: z
    .array(z.string().url("Mỗi image phải là URL hợp lệ"))
    .max(5)
    .optional(),
});

const createReviewSchema = { body: reviewBodySchema };
const updateReviewSchema = { body: reviewBodySchema.partial() };
const adminReplySchema = {
  body: z.object({
    adminReply: z.string().min(1).max(500),
  }),
};

// Wishlist Validations

const productIdParamSchema = {
  params: z.object({
    productId: z.string().regex(/^[a-f\d]{24}$/i, "ID sản phẩm không hợp lệ"),
  }),
};

// Blog Validations

const blogBodySchema = z.object({
  title: z.string().min(5, "Title tối thiểu 5 ký tự").max(200),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "Slug chỉ gồm chữ thường, số và dấu -")
    .optional(),
  content: z.string().min(50, "Content tối thiểu 50 ký tự"),
  thumbnail: z
    .string()
    .url("Thumbnail phải là URL hợp lệ")
    .optional()
    .nullable(),
  tags: z.array(z.string().max(30)).max(10).optional(),
  isActive: z.boolean().optional(),
});

const createBlogSchema = { body: blogBodySchema };

const updateBlogSchema = { body: blogBodySchema.partial() };

const blogQuerySchema = {
  query: z.object({
    page: z.coerce.number().int().min(1).default(1), // .coerce chuyển string "1" thành number 1
    limit: z.coerce.number().int().min(1).max(50).default(10),
    tag: z.string().optional(),
    search: z.string().optional(),
  }),
};

// Blog Comment Validations

const createCommentSchema = {
  body: z.object({
    content: z.string().min(2, "Comment tối thiểu 2 ký tự").max(500),
  }),
};

const approveCommentSchema = {
  body: z.object({
    isApproved: z.boolean(),
  }),
};

const commentQuerySchema = {
  query: z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
    isApproved: z.enum(["true", "false"]).optional(),
  }),
};

const reviewQuerySchema = {
  query: z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
    productId: z
      .string()
      .regex(/^[a-f\d]{24}$/i)
      .optional(),
    rating: z.coerce.number().int().min(1).max(5).optional(),
  }),
};

module.exports = {
  productIdParamSchema,
  adminReplySchema,
  updateReviewSchema,
  createReviewSchema,
  blogQuerySchema,
  updateBlogSchema,
  createBlogSchema,
  createCommentSchema,
  approveCommentSchema,
  commentQuerySchema,
  reviewQuerySchema,
};
