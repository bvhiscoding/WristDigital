const express = require("express");
const router = express.Router({ mergeParams: true });
const protect = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const reviewController = require("../controllers/review.controller");
const {
  createReviewSchema,
  updateReviewSchema,
} = require("../validations/interaction.validation");

// GET  /api/v1/products/:productId/reviews (public)
router.get("/", reviewController.getProductReviews);

// POST /api/v1/products/:productId/reviews
router.post(
  "/",
  protect,
  validate(createReviewSchema),
  reviewController.createReview,
);

// PATCH  /api/v1/reviews/:id
router.patch(
  "/:id",
  protect,
  validate(updateReviewSchema),
  reviewController.updateReview,
);

// DELETE /api/v1/reviews/:id
router.delete("/:id", protect, reviewController.deleteReview);

module.exports = router;
