const router = require("express").Router();
const validate = require("../../middlewares/validate.middleware");
const controller = require("../../controllers/admin/dashboard.admin.controller");
const { dashboardQuerySchema } = require("../../validations/marketing.validation");

router.get(
  "/overview",
  validate({ query: dashboardQuerySchema }),
  controller.getOverview,
);

module.exports = router;
