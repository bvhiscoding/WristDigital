const router = require("express").Router();
const controller = require("../../controllers/admin/product.admin.controller");
const validate = require("../../middlewares/validate.middleware");
const upload = require("../../middlewares/upload.middleware");
const parseProductPayload = require("../../middlewares/parseProductPayload.middleware");
const {
  idParamSchema,
  createProductSchema,
  updateStockSchema,
} = require("../../validations/catalog.validation");
router.post(
  "/",
  upload.array("images", 10),
  parseProductPayload,
  validate({ body: createProductSchema }),
  controller.createProduct,
);
router.patch(
  "/:id",
  upload.array("images", 10),
  parseProductPayload,
  validate({ params: idParamSchema, body: createProductSchema.partial() }),
  controller.updateProduct,
);
router.patch(
  "/:id/stock",
  validate({ params: idParamSchema, body: updateStockSchema }),
  controller.updateStock,
);
router.delete(
  "/:id",
  validate({ params: idParamSchema }),
  controller.deleteProduct,
);
module.exports = router;
