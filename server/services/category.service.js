const Category = require("../models/Category");
const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");

const normalizeSlug = (slug) =>
  String(slug || "")
    .trim()
    .toLowerCase();
const createCategory = async (payload) => {
  const data = { ...payload, slug: normalizeSlug(payload.slug) };
  const existed = await Category.findOne({
    $or: [{ name: data.name }, { slug: data.slug }],
  });
  if (existed) {
    throw new ApiError(400, "Category name or slug already exists");
  }
  const category = await Category.create(data);
  return category;
};

const getCategories = async () => {
  const categories = await Category.find({ isActive: true }).sort({
    createdAt: -1,
  });
  return categories;
};
const updateCategoryById = async (id, payload) => {
  const update = { ...payload };
  if (update.slug) update.slug = normalizeSlug(update.slug);
  const current = await Category.findById(id);
  if (!current) throw new ApiError(404, "Category not found");
  if (update.name || update.slug) {
    const duplicate = await Category.findOne({
      _id: { $ne: id },
      $or: [
        ...(update.name ? [{ name: update.name }] : []),
        ...(update.slug ? [{ slug: update.slug }] : []),
      ],
    });
    if (duplicate) {
      throw new ApiError(400, "Category name or slug already exists");
    }
  }
  const category = await Category.findByIdAndUpdate(id, update, {
    returnDocument: "after",
    runValidators: true,
  });
  return category;
};
const deleteCategoryById = async (id) => {
  const category = await Category.findById(id);
  if (!category) throw new ApiError(404, "Category not found");
  const isUsed = await Product.exists({ category: id });
  if (isUsed) {
    throw new ApiError(400, "Cannot delete category in use by products");
  }
  await Category.findByIdAndDelete(id);
  return { message: "Category deleted successfully" };
};
module.exports = {
  createCategory,
  getCategories,
  updateCategoryById,
  deleteCategoryById,
};
