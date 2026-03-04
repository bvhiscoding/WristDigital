const router = require("express").Router();
const validate = require("../../middlewares/validate.middleware");
const controller = require("../../controllers/admin/coupon.admin.controller");
const {
  idParamSchema,
  createCouponSchema,
  updateCouponSchema,
  marketingQuerySchema,
} = require("../../validations/marketing.validation");

router.get("/", validate({ query: marketingQuerySchema }), controller.listCoupons);
router.get("/:id", validate({ params: idParamSchema }), controller.getCouponById);
router.post("/", validate({ body: createCouponSchema }), controller.createCoupon);
router.patch(
  "/:id",
  validate({ params: idParamSchema, body: updateCouponSchema }),
  controller.updateCoupon,
);
router.delete("/:id", validate({ params: idParamSchema }), controller.deleteCoupon);

module.exports = router;
