const router = require("express").Router();
const validate = require("../../middlewares/validate.middleware");
const controller = require("../../controllers/admin/sale.admin.controller");
const {
  idParamSchema,
  createSaleSchema,
  updateSaleSchema,
  marketingQuerySchema,
} = require("../../validations/marketing.validation");

router.get("/", validate({ query: marketingQuerySchema }), controller.listSales);
router.get("/:id", validate({ params: idParamSchema }), controller.getSaleById);
router.post("/", validate({ body: createSaleSchema }), controller.createSale);
router.patch(
  "/:id",
  validate({ params: idParamSchema, body: updateSaleSchema }),
  controller.updateSale,
);
router.delete("/:id", validate({ params: idParamSchema }), controller.deleteSale);

module.exports = router;
