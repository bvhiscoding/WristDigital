const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const controller = require("../controllers/order.controller");
const {
  checkoutSchema,
  orderQuerySchema,
  orderIdParamSchema,
} = require("../validations/transaction.validation");
router.post(
  "/checkout",
  protect,
  validate({ body: checkoutSchema }),
  controller.checkout,
);
router.get(
  "/my-orders",
  protect,
  validate({ query: orderQuerySchema }),
  controller.getMyOrders,
);
router.get(
  "/:id",
  protect,
  validate({ params: orderIdParamSchema }),
  controller.getMyOrderById,
);
module.exports = router;
