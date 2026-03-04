const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const cartService = require("../services/cart.service");
const getMyCart = asyncHandler(async (req, res) => {
  const data = await cartService.getMyCart(req.user.id);
  return new ApiResponse(200, data, "Cart fetched successfully").send(res);
});
const addToCart = asyncHandler(async (req, res) => {
  const data = await cartService.addToCart(req.user.id, req.body);
  return new ApiResponse(200, data, "Item added to cart").send(res);
});
const updateCartItemQuantity = asyncHandler(async (req, res) => {
  const data = await cartService.updateCartItemQuantity(
    req.user.id,
    req.params.productId,
    req.body,
  );
  return new ApiResponse(200, data, "Cart item updated").send(res);
});
const removeFromCart = asyncHandler(async (req, res) => {
  const data = await cartService.removeFromCart(
    req.user.id,
    req.params.productId,
  );
  return new ApiResponse(200, data, "Item removed from cart").send(res);
});
const clearCart = asyncHandler(async (req, res) => {
  const data = await cartService.clearCart(req.user.id);
  return new ApiResponse(200, data, data.message).send(res);
});
module.exports = {
  getMyCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
};
