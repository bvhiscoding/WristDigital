const { z } = require("zod");

const registerSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must not exceed 50 characters"),
  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
    .optional(),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: z.string({ required_error: "Password is required" }),
});

const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
});
const resetPasswordSchema = z.object({
  password: z
    .string({ required_error: "New password is required" })
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must not exceed 50 characters"),
});
const updatePasswordSchema = z.object({
  currentPassword: z.string({ required_error: "Current password is required" }),
  newPassword: z
    .string({ required_error: "New password is required" })
    .min(6, "New password must be at least 6 characters")
    .max(50, "New password must not exceed 50 characters"),
});
const updateProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters")
    .optional(),
  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
    .optional(),
  avatar: z.string().url("Avatar must be a valid URL").optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updatePasswordSchema,
  updateProfileSchema,
};
