const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const categoryService = require("../services/category.service");
const createCategory = asyncHandler(async (req, res) => {
  const data = await categoryService.createCategory(req.body);
  new ApiResponse(201, data, "Category created successfully").send(res);
});
const getCategories = asyncHandler(async (req, res) => {
  const data = await categoryService.getCategories();
  new ApiResponse(200, data, "Categories fetched successfully").send(res);
});
const updateCategory = asyncHandler(async (req, res) => {
  const data = await categoryService.updateCategoryById(req.params.id, req.body);
  new ApiResponse(200, data, "Category updated successfully").send(res);
});
const deleteCategory = asyncHandler(async (req, res) => {
  const data = await categoryService.deleteCategoryById(req.params.id);
  new ApiResponse(200, data, "Category deleted successfully").send(res);
});
module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};