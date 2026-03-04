const { z } = require("zod");
const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");
const cartAddItemSchema = z.object({
  productId: objectIdSchema,
  quantity: z.number().int().min(1).max(999),
});
const cartUpdateQuantitySchema = z.object({
  quantity: z.number().int().min(1).max(999),
});
const productIdParamSchema = z.object({
  productId: objectIdSchema,
});
const orderIdParamSchema = z.object({
  id: objectIdSchema,
});
const checkoutSchema = z.object({
  shippingAddress: z.object({
    fullName: z.string().min(2).max(100),
    phone: z.string().min(8).max(20),
    street: z.string().min(2).max(200),
    city: z.string().min(2).max(100),
    state: z.string().max(100).optional().default(""),
    country: z.string().min(2).max(100),
  }),
  paymentMethod: z.enum(["COD", "BANK_TRANSFER"]).optional().default("COD"),
  note: z.string().max(500).optional().default(""),
  couponCode: z.string().min(3).max(30).optional(),
});
const orderQuerySchema = z.object({
  status: z.enum(["Processing", "Shipped", "Cancelled"]).optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
});
const adminUpdateOrderStatusSchema = z.object({
  status: z.enum(["Processing", "Shipped", "Cancelled"]),
  note: z.string().max(500).optional().default(""),
});
module.exports = {
  cartAddItemSchema,
  cartUpdateQuantitySchema,
  productIdParamSchema,
  orderIdParamSchema,
  checkoutSchema,
  orderQuerySchema,
  adminUpdateOrderStatusSchema,
};
