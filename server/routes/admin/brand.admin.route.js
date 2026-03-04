const router = require("express").Router();
const controller = require("../../controllers/admin/brand.admin.controller");
const validate = require("../../middlewares/validate.middleware");
const {
  idParamSchema,
  createBrandSchema,
} = require("../../validations/catalog.validation");
router.post("/", validate({ body: createBrandSchema }), controller.createBrand);
router.patch(
  "/:id",
  validate({ params: idParamSchema, body: createBrandSchema.partial() }),
  controller.updateBrand,
);
router.delete(
  "/:id",
  validate({ params: idParamSchema }),
  controller.deleteBrand,
);
module.exports = router;
