const { z } = require("zod");

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

const idParamSchema = z.object({
  id: objectIdSchema,
});

const createCouponSchema = z
  .object({
    code: z.string().min(3).max(30),
    description: z.string().max(500).optional().default(""),
    discountType: z.enum(["PERCENT", "FIXED"]),
    discountValue: z.number().positive(),
    maxDiscount: z.number().nonnegative().nullable().optional(),
    minOrderValue: z.number().nonnegative().optional().default(0),
    usageLimit: z.number().int().min(1).nullable().optional(),
    perUserLimit: z.number().int().min(1).optional().default(1),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date(),
    isActive: z.boolean().optional().default(true),
  })
  .refine((v) => v.endsAt > v.startsAt, {
    message: "endsAt must be greater than startsAt",
    path: ["endsAt"],
  })
  .refine((v) => (v.discountType === "PERCENT" ? v.discountValue <= 100 : true), {
    message: "Percent coupon cannot exceed 100",
    path: ["discountValue"],
  });

const updateCouponSchema = z
  .object({
    code: z.string().min(3).max(30).optional(),
    description: z.string().max(500).optional(),
    discountType: z.enum(["PERCENT", "FIXED"]).optional(),
    discountValue: z.number().positive().optional(),
    maxDiscount: z.number().nonnegative().nullable().optional(),
    minOrderValue: z.number().nonnegative().optional(),
    usageLimit: z.number().int().min(1).nullable().optional(),
    perUserLimit: z.number().int().min(1).optional(),
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(
    (v) => {
      if (v.startsAt && v.endsAt) return v.endsAt > v.startsAt;
      return true;
    },
    {
      message: "endsAt must be greater than startsAt",
      path: ["endsAt"],
    },
  )
  .refine(
    (v) => {
      if (v.discountType === "PERCENT" && v.discountValue !== undefined) {
        return v.discountValue <= 100;
      }
      return true;
    },
    {
      message: "Percent coupon cannot exceed 100",
      path: ["discountValue"],
    },
  );

const saleScopeEnum = z.enum(["ALL", "PRODUCTS", "CATEGORIES", "BRANDS"]);

const createSaleSchema = z
  .object({
    name: z.string().min(2).max(120),
    discountType: z.enum(["PERCENT", "FIXED"]),
    discountValue: z.number().positive(),
    scope: saleScopeEnum.default("ALL"),
    productIds: z.array(objectIdSchema).optional().default([]),
    categoryIds: z.array(objectIdSchema).optional().default([]),
    brandIds: z.array(objectIdSchema).optional().default([]),
    priority: z.number().int().optional().default(0),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date(),
    isActive: z.boolean().optional().default(true),
  })
  .refine((v) => v.endsAt > v.startsAt, {
    message: "endsAt must be greater than startsAt",
    path: ["endsAt"],
  })
  .refine((v) => (v.discountType === "PERCENT" ? v.discountValue <= 100 : true), {
    message: "Percent sale cannot exceed 100",
    path: ["discountValue"],
  })
  .refine(
    (v) => {
      if (v.scope === "PRODUCTS") return v.productIds.length > 0;
      if (v.scope === "CATEGORIES") return v.categoryIds.length > 0;
      if (v.scope === "BRANDS") return v.brandIds.length > 0;
      return true;
    },
    {
      message: "Scope target ids are required for selected scope",
      path: ["scope"],
    },
  );

const updateSaleSchema = z
  .object({
    name: z.string().min(2).max(120).optional(),
    discountType: z.enum(["PERCENT", "FIXED"]).optional(),
    discountValue: z.number().positive().optional(),
    scope: saleScopeEnum.optional(),
    productIds: z.array(objectIdSchema).optional(),
    categoryIds: z.array(objectIdSchema).optional(),
    brandIds: z.array(objectIdSchema).optional(),
    priority: z.number().int().optional(),
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(
    (v) => {
      if (v.startsAt && v.endsAt) return v.endsAt > v.startsAt;
      return true;
    },
    {
      message: "endsAt must be greater than startsAt",
      path: ["endsAt"],
    },
  )
  .refine(
    (v) => {
      if (v.discountType === "PERCENT" && v.discountValue !== undefined) {
        return v.discountValue <= 100;
      }
      return true;
    },
    {
      message: "Percent sale cannot exceed 100",
      path: ["discountValue"],
    },
  );

const marketingQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  isActive: z.coerce.boolean().optional(),
  q: z.string().optional(),
});

const dashboardQuerySchema = z.object({
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
});

module.exports = {
  idParamSchema,
  createCouponSchema,
  updateCouponSchema,
  createSaleSchema,
  updateSaleSchema,
  marketingQuerySchema,
  dashboardQuerySchema,
};
