const router = require("express").Router();
const controller = require("../../controllers/admin/category.admin.controller");
const validate = require("../../middlewares/validate.middleware");
const {
  idParamSchema,
  createCategorySchema,
} = require("../../validations/catalog.validation");
router.post(
  "/",
  validate({ body: createCategorySchema }),
  controller.createCategory,
);
router.patch(
  "/:id",
  validate({ params: idParamSchema, body: createCategorySchema.partial() }),
  controller.updateCategory,
);
router.delete(
  "/:id",
  validate({ params: idParamSchema }),
  controller.deleteCategory,
);
module.exports = router;
