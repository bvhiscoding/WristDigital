const express = require("express");
const router = express.Router();

const validate = require("../../middlewares/validate.middleware");
const reviewAdminController = require("../../controllers/admin/review.admin.controller");
const {
  adminReplySchema,
  reviewQuerySchema,
} = require("../../validations/interaction.validation");

// GET  /api/v1/admin/reviews
router.get(
  "/",
  validate(reviewQuerySchema),
  reviewAdminController.getAllReviews,
);

// PATCH /api/v1/admin/reviews/:id/reply
router.patch(
  "/:id/reply",
  validate(adminReplySchema),
  reviewAdminController.replyReview,
);

// DELETE /api/v1/admin/reviews/:id
router.delete("/:id", reviewAdminController.deleteReview);

module.exports = router;
