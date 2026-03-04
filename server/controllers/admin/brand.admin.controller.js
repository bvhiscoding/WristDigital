const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/brand.admin.service");

const createBrand = asyncHandler(async (req, res) => {
  const brand = await service.createBrand(req.body);
  return new ApiResponse(201, brand, "Brand created successfully").send(res);
});

const updateBrand = asyncHandler(async (req, res) => {
  const brand = await service.updateBrandById(req.params.id, req.body);
  return new ApiResponse(200, brand, "Brand updated successfully").send(res);
});

const deleteBrand = asyncHandler(async (req, res) => {
  const result = await service.deleteBrandById(req.params.id);
  return new ApiResponse(200, result, result.message).send(res);
});

module.exports = { createBrand, updateBrand, deleteBrand };
