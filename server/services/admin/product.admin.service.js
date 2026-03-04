const Product = require("../../models/Product");
const Brand = require("../../models/Brand");
const Category = require("../../models/Category");
const ApiError = require("../../utils/ApiError");
const cloudinary = require("../../config/cloudinary");

const normalizeSlug = (slug) =>
  String(slug || "")
    .trim()
    .toLowerCase();
const ensureBrandCategoryExist = async (brandId, categoryId) => {
  const [brand, category] = await Promise.all([
    Brand.findById(brandId),
    Category.findById(categoryId),
  ]);
  if (!brand) {
    throw new ApiError(400, "Brand not found");
  }
  if (!category) {
    throw new ApiError(400, "Category not found");
  }
};

const uploadBufferToCloudinary = (buffer, folder) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) return reject(error);
        return resolve(result.secure_url);
      },
    );
    stream.end(buffer);
  });
const uploadImages = async (files) => {
  if (!files || files.length === 0) return [];
  const urls = await Promise.all(
    files.map((file) =>
      uploadBufferToCloudinary(file.buffer, "wristdigital/products"),
    ),
  );
  return urls;
};

const createProduct = async (payload, files = []) => {
  const data = { ...payload, slug: normalizeSlug(payload.slug) };
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
  const uploadedUrls = await uploadImages(files);
  data.images = [
    ...(Array.isArray(data.images) ? data.images : []),
    ...uploadedUrls,
  ];
  const product = await Product.create(data);
  return product;
};

const updateProductById = async (id, payload, files = []) => {
  const current = await Product.findById(id);
  if (!current) {
    throw new ApiError(404, "Product not found");
  }
  const update = { ...payload };
  if (update.slug) update.slug = normalizeSlug(update.slug);
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
  const nextPrice = update.price ?? current.price;
  const nextDiscount = update.discountPrice ?? current.discountPrice;
  if (nextDiscount != null && nextDiscount > nextPrice) {
    throw new ApiError(
      400,
      "discountPrice must be less than or equal to price",
    );
  }
  const uploadedUrls = await uploadImages(files);
  if (uploadedUrls.length > 0) {
    update.images = [
      ...(Array.isArray(update.images) ? update.images : current.images),
      ...uploadedUrls,
    ];
  }
  const product = await Product.findByIdAndUpdate(id, update, {
    returnDocument: "after",
    runValidators: true,
  })
    .populate("brand", "name slug")
    .populate("category", "name slug");
  return product;
};

const updateStockById = async (id, payload) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  if (payload.stockQuantity !== undefined)
    product.stockQuantity = payload.stockQuantity;
  if (payload.isActive !== undefined) {
    product.isActive = payload.isActive;
  }
  await product.save();
  return product;
};
const deleteProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  product.isActive = false;
  await product.save();
  return { message: "Product hidden successfully" };
};
module.exports = {
  createProduct,
  updateProductById,
  updateStockById,
  deleteProductById,
};
