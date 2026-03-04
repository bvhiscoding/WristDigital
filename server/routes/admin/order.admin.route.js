const router = require("express").Router();
const validate = require("../../middlewares/validate.middleware");
const controller = require("../../controllers/admin/order.admin.controller");
const {
  orderQuerySchema,
  orderIdParamSchema,
  adminUpdateOrderStatusSchema,
} = require("../../validations/transaction.validation");
router.get("/", validate({ query: orderQuerySchema }), controller.listOrders);
router.get(
  "/:id",
  validate({ params: orderIdParamSchema }),
  controller.getOrderById,
);
router.patch(
  "/:id/status",
  validate({ params: orderIdParamSchema, body: adminUpdateOrderStatusSchema }),
  controller.updateOrderStatus,
);

module.exports = router;
