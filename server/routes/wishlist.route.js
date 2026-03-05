const express = require("express");
const router = express.Router();

const protect = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const wishlistController = require("../controllers/wishlist.controller");
const {
  productIdParamSchema,
} = require("../validations/interaction.validation");

router.use(protect);

// GET /api/v1/wishlist
router.get("/", wishlistController.getWishlist);

// POST /api/v1/wishlist/toggle/:productId
router.post(
  "/toggle/:productId",
  validate(productIdParamSchema),
  wishlistController.toggleWishlist,
);

module.exports = router;
