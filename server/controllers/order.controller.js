const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const orderService = require("../services/order.service");
const checkout = asyncHandler(async (req, res) => {
  const order = await orderService.checkoutFromCart(req.user.id, req.body);
  return new ApiResponse(201, order, "Order placed successfully").send(res);
});
const getMyOrders = asyncHandler(async (req, res) => {
  const data = await orderService.getMyOrders(req.user.id, req.query);
  return new ApiResponse(200, data, "Orders fetched successfully").send(res);
});
const getMyOrderById = asyncHandler(async (req, res) => {
  const data = await orderService.getMyOrderById(req.user.id, req.params.id);
  return new ApiResponse(200, data, "Order fetched successfully").send(res);
});
module.exports = {
  checkout,
  getMyOrders,
  getMyOrderById,
};
