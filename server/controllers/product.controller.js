const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const productService = require("../services/product.service");
const createProduct = asyncHandler(async (req, res) => {
  const response = await productService.createProduct(req.body);
  new ApiResponse(201, response, "Product created successfully").send(res);
});
const getProducts = asyncHandler(async (req, res) => {
  const response = await productService.getProducts(req.query);
  new ApiResponse(200, response, "Products fetched successfully").send(res);
});
const getProductBySlug = asyncHandler(async (req, res) => {
  const response = await productService.getProductBySlug(req.params.slug);
  new ApiResponse(200, response, "Product fetched successfully").send(res);
});
const updateProduct = asyncHandler(async (req, res) => {
  const response = await productService.updateProductById(req.params.id, req.body);
  new ApiResponse(200, response, "Product updated successfully").send(res);
});
const deleteProduct = asyncHandler(async (req, res) => {
  const response = await productService.deleteProductById(req.params.id);
  new ApiResponse(200, response, "Product deleted successfully").send(res);
});
module.exports = {
  createProduct,
  getProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct,
};
