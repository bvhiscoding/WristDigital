const mongoose = require("mongoose");
const Product = require("../models/Product");
const Brand = require("../models/Brand");
const Category = require("../models/Category");
const ApiError = require("../utils/ApiError");

const normalizeSlug = (slug) =>
  String(slug || "")
    .trim()
    .toLowerCase();
const isObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const resolveBrandId = async (brandInput) => {
  if (!brandInput) return null;
  if (isObjectId(brandInput)) return brandInput;
  const brand = await Brand.findOne({ slug: normalizeSlug(brandInput) });
  if (!brand) throw new ApiError(400, "Invalid brand filter");
  return brand._id.toString();
};
const resolveCategoryId = async (categoryInput) => {
  if (!categoryInput) return null;
  if (isObjectId(categoryInput)) return categoryInput;
  const category = await Category.findOne({
    slug: normalizeSlug(categoryInput),
  });
  if (!category) throw new ApiError(400, "Invalid category filter");
  return category._id.toString();
};

const ensureBrandCategoryExist = async (brandId, categoryId) => {
  const [brand, category] = await Promise.all([
    Brand.findById(brandId),
    Category.findById(categoryId),
  ]);
  if (!brand) throw new ApiError(400, "Brand not found");
  if (!category) throw new ApiError(400, "Category not found");
};

const createProduct = async (payload) => {
  const data = {
    ...payload,
    slug: normalizeSlug(payload.slug),
  };
  await ensureBrandCategoryExist(data.brand, data.category);
  const duplicate = await Product.findOne({
    $or: [{ slug: data.slug }, { sku: data.sku }],
  });
  if (duplicate) {
    throw new ApiError(400, "Product slug or sku already exists");
  }
  if (data.discountPrice != null && data.discountPrice > data.price) {
    throw new ApiError(
      400,
      "discountPrice must be less than or equal to price",
    );
  }
  const product = await Product.create(data);
  return product;
};

const getProducts = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 12;
  const skip = (page - 1) * limit;
  const filter = { isActive: true };
  if (query.search) {
    filter.$text = { $search: query.search };
  }
  if (query.brand) {
    filter.brand = await resolveBrandId(query.brand);
  }
  if (query.category) {
    filter.category = await resolveCategoryId(query.category);
  }
  if (query.minPrice !== undefined || query.maxPrice !== undefined) {
    filter.price = {};
    if (query.minPrice !== undefined) filter.price.$gte = Number(query.minPrice);
    if (query.maxPrice !== undefined) filter.price.$lte = Number(query.maxPrice);
  }
  let sort = { createdAt: -1 };
  if (query.sort === "price_asc") sort = { price: 1 };
  if (query.sort === "price_desc") sort = { price: -1 };
  if (query.sort === "rating_desc") sort = { averageRating: -1 };
  const [items, total] = await Promise.all([
    Product.find(filter)
      .populate("brand", "name slug")
      .populate("category", "name slug")
      .sort(sort)
      .skip(skip)
      .limit(limit),
    Product.countDocuments(filter),
  ]);
  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getProductBySlug = async (slug) => {
  const product = await Product.findOne({
    slug: normalizeSlug(slug),
    isActive: true,
  })
    .populate("brand", "name slug")
    .populate("category", "name slug");
  if (!product) throw new ApiError(404, "Product not found");
  return product;
};

const updateProductById = async (id, payload) => {
  const update = { ...payload };
  if (update.slug) update.slug = normalizeSlug(update.slug);
  const current = await Product.findById(id);
  if (!current) throw new ApiError(404, "Product not found");
  if (update.brand || update.category) {
    await ensureBrandCategoryExist(
      update.brand || current.brand,
      update.category || current.category,
    );
  }
  if (update.slug || update.sku) {
    const duplicate = await Product.findOne({
      _id: { $ne: id },
      $or: [
        ...(update.slug ? [{ slug: update.slug }] : []),
        ...(update.sku ? [{ sku: update.sku }] : []),
      ],
    });
    if (duplicate) {
      throw new ApiError(400, "Product slug or sku already exists");
    }
  }
  const targetPrice = update.price ?? current.price;
  const targetDiscount = update.discountPrice ?? current.discountPrice;
  if (targetDiscount != null && targetDiscount > targetPrice) {
    throw new ApiError(
      400,
      "discountPrice must be less than or equal to price",
    );
  }
  const product = await Product.findByIdAndUpdate(id, update, {
    returnDocument: "after",
    runValidators: true,
  })
    .populate("brand", "name slug")
    .populate("category", "name slug");
  return product;
};

const deleteProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");
  await Product.findByIdAndDelete(id);
  return { message: "Product deleted successfully" };
};

module.exports = {
  createProduct,
  getProducts,
  getProductBySlug,
  updateProductById,
  deleteProductById,
};
