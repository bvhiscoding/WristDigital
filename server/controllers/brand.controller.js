const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const brandService = require("../services/brand.service");

const createBrand = asyncHandler(async (req, res) => {
  const response = await brandService.createBrand(req.body);
  new ApiResponse(201, response, "Brand created successfully").send(res);
});
const getBrands = asyncHandler(async (req, res) => {
  const response = await brandService.getBrands();
  new ApiResponse(200, response, "Brands fetched successfully").send(res);
});
const updateBrand = asyncHandler(async (req, res) => {
  const response = await brandService.updateBrandById(req.params.id, req.body);
  new ApiResponse(200, response, "Brand updated successfully").send(res);
});
const deleteBrand = asyncHandler(async (req, res) => {
  const response = await brandService.deleteBrandById(req.params.id);
  new ApiResponse(200, response, "Brand deleted successfully").send(res);
});
module.exports = {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand,
};