const { z } = require("zod");

const idParamSchema = z.object({
  id: z.string().length(24, "ID must be 24 characters long"),
});
const createBrandSchema = z.object({
  name: z.string().min(2, "Brand name must be at least 2 characters long"),
  slug: z.string().min(2, "Brand slug must be at least 2 characters long"),
  description: z.string().optional(),
  logo: z.string().url().optional(),
  isActive: z.boolean().optional(),
});

const createCategorySchema = z.object({
  name: z.string().min(2, "Category name must be at least 2 characters long"),
  slug: z.string().min(2, "Category slug must be at least 2 characters long"),
  description: z.string().optional(),
  image: z.string().url().optional(),
  isActive: z.boolean().optional(),
});
const createProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters long"),
  slug: z.string().min(2, "Product slug must be at least 2 characters long"),
  description: z
    .string()
    .min(10, "Product description must be at least 10 characters long"),
  sku: z.string().min(2, "Product SKU must be at least 2 characters long"),
  brand: z.string().length(24, "Brand ID must be 24 characters long"),
  category: z.string().length(24, "Category ID must be 24 characters long"),
  price: z.number().nonnegative(),
  discountPrice: z.number().nonnegative().nullable().optional(),
  productType: z.enum(["Smartwatch", "Accessory"]),
  stockQuantity: z.number().int().nonnegative().optional(),
  images: z.array(z.string().url()).optional(),
  specifications: z.record(z.string(), z.any()).optional(),
  colors: z
    .array(
      z.object({
        name: z.string().min(1),
        hexCode: z.string().optional(),
        stock: z.number().int().nonnegative().optional(),
      }),
    )
    .optional(),
  watchBandOptions: z.array(z.string().min(1)).optional(),
  isActive: z.boolean().optional(),
});

const productQuerySchema = z.object({
  search: z.string().optional(),
  brand: z.string().optional(),
  category: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  sort: z.enum(["newest", "price_asc", "price_desc", "rating_desc"]).optional(),
  page: z.coerce.number().int().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});
const updateStockSchema = z
  .object({
    stockQuantity: z.number().int().nonnegative().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(
    (value) =>
      value.stockQuantity !== undefined || value.isActive !== undefined,
    {
      message: "At least one field is required: stockQuantity or isActive",
    },
  );
module.exports = {
  idParamSchema,
  createBrandSchema,
  createCategorySchema,
  createProductSchema,
  productQuerySchema,
  updateStockSchema,
};
