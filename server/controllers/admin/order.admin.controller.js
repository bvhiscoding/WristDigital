const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/order.admin.service");
const listOrders = asyncHandler(async (req, res) => {
  const data = await service.listOrders(req.query);
  return new ApiResponse(200, data, "Orders fetched successfully").send(res);
});
const getOrderById = asyncHandler(async (req, res) => {
  const data = await service.getOrderById(req.params.id);
  return new ApiResponse(200, data, "Order fetched successfully").send(res);
});
const updateOrderStatus = asyncHandler(async (req, res) => {
  const data = await service.updateOrderStatus(
    req.params.id,
    req.body,
    req.user.id,
  );
  return new ApiResponse(200, data, "Order status updated successfully").send(
    res,
  );
});
module.exports = {
  listOrders,
  getOrderById,
  updateOrderStatus,
};
