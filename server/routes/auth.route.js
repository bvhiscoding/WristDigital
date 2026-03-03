const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require("../validations/auth.validation");
const router = express.Router();

router.post("/register", validate({ body: registerSchema }), authController.register);
router.post("/login", validate({ body: loginSchema }), authController.login);
router.post(
  "/forgot-password",
  validate({ body: forgotPasswordSchema }),
  authController.forgotPassword,
);
router.patch(
  "/reset-password/:token",
  validate({ body: resetPasswordSchema }),
  authController.resetPassword,
);
module.exports = router;
