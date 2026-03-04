const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/category.admin.service");

const createCategory = asyncHandler(async (req, res) => {
  const category = await service.createCategory(req.body);
  return new ApiResponse(201, category, "Category created successfully").send(res);
});

const updateCategory = asyncHandler(async (req, res) => {
  const category = await service.updateCategoryById(req.params.id, req.body);
  return new ApiResponse(200, category, "Category updated successfully").send(res);
});

const deleteCategory = asyncHandler(async (req, res) => {
  const result = await service.deleteCategoryById(req.params.id);
  return new ApiResponse(200, result, result.message).send(res);
});

module.exports = { createCategory, updateCategory, deleteCategory };
