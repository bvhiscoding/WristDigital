const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/coupon.admin.service");

const listCoupons = asyncHandler(async (req, res) => {
  const data = await service.listCoupons(req.query);
  return new ApiResponse(200, data, "Coupons fetched successfully").send(res);
});

const getCouponById = asyncHandler(async (req, res) => {
  const data = await service.getCouponById(req.params.id);
  return new ApiResponse(200, data, "Coupon fetched successfully").send(res);
});

const createCoupon = asyncHandler(async (req, res) => {
  const data = await service.createCoupon(req.body);
  return new ApiResponse(201, data, "Coupon created successfully").send(res);
});

const updateCoupon = asyncHandler(async (req, res) => {
  const data = await service.updateCouponById(req.params.id, req.body);
  return new ApiResponse(200, data, "Coupon updated successfully").send(res);
});

const deleteCoupon = asyncHandler(async (req, res) => {
  const data = await service.deleteCouponById(req.params.id);
  return new ApiResponse(200, data, data.message).send(res);
});

module.exports = {
  listCoupons,
  getCouponById,
  createCoupon,
  updateCoupon,
  deleteCoupon,
};
