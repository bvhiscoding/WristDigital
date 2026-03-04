const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/product.admin.service");

const createProduct = asyncHandler(async (req, res) => {
  const product = await service.createProduct(req.body, req.files);
  return new ApiResponse(201, product, "Product created successfully").send(res);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await service.updateProductById(req.params.id, req.body, req.files);
  return new ApiResponse(200, product, "Product updated successfully").send(res);
});

const updateStock = asyncHandler(async (req, res) => {
  const product = await service.updateStockById(req.params.id, req.body);
  return new ApiResponse(200, product, "Stock updated successfully").send(res);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const result = await service.deleteProductById(req.params.id);
  return new ApiResponse(200, result, result.message).send(res);
});

module.exports = { createProduct, updateProduct, updateStock, deleteProduct };
