const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const wishlistService = require("../services/wishlist.service");

// GET /api/v1/wishlist  [Protected]
const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await wishlistService.getWishlist(req.user._id);
  return new ApiResponse(
    200,
    wishlist,
    "Lấy danh sách yêu thích thành công",
  ).send(res);
});

// POST /api/v1/wishlist/toggle/:productId  [Protected]
const toggleWishlist = asyncHandler(async (req, res) => {
  const result = await wishlistService.toggleWishlist(
    req.user._id,
    req.params.productId,
  );
  const message =
    result.action === "added"
      ? "Đã thêm vào danh sách yêu thích"
      : "Đã xóa khỏi danh sách yêu thích";
  return new ApiResponse(200, result, message).send(res);
});
module.exports = {
  getWishlist,
  toggleWishlist,
};
