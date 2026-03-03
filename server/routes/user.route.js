const router = require("express").Router(); 
const userController = require("../controllers/user.controller"); 
const protect = require("../middlewares/auth.middleware"); 
const validate = require("../middlewares/validate.middleware"); 
const {
  updateProfileSchema,
  updatePasswordSchema,
} = require("../validations/auth.validation"); 
router.get("/me", protect, userController.getMe);
router.patch(
  "/update-me",
  protect,
  validate({ body: updateProfileSchema }),
  userController.updateMe,
); 
router.patch(
  "/update-password",
  protect,
  validate({ body: updatePasswordSchema }),
  userController.updatePassword,
);
module.exports = router; 
