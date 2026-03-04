const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const controller = require("../controllers/cart.controller");
const {
  cartAddItemSchema,
  cartUpdateQuantitySchema,
  productIdParamSchema,
} = require("../validations/transaction.validation");
router.get("/", protect, controller.getMyCart);
router.post(
  "/items",
  protect,
  validate({ body: cartAddItemSchema }),
  controller.addToCart,
);
router.patch(
  "/items/:productId",
  protect,
  validate({ params: productIdParamSchema, body: cartUpdateQuantitySchema }),
  controller.updateCartItemQuantity,
);
router.delete(
  "/items/:productId",
  protect,
  validate({ params: productIdParamSchema }),
  controller.removeFromCart,
);
router.delete("/clear", protect, controller.clearCart);
module.exports = router;