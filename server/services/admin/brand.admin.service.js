const Brand = require("../../models/Brand");
const Product = require("../../models/Product");
const ApiError = require("../../utils/ApiError");

const normalizeSlug = (slug) =>
  String(slug || "")
    .trim()
    .toLowerCase();

const createBrand = async (payload) => {
  const data = { ...payload, slug: normalizeSlug(payload.slug) };
  const brandExist = await Brand.findOne({
    $or: [{ name: data.name }, { slug: data.slug }],
  });

  if (brandExist) {
    throw new ApiError(400, "Brand name or slug already exists");
  }

  const brand = await Brand.create(data);
  return brand;
};

const updateBrandById = async (id, payload) => {
  const update = { ...payload };
  if (update.slug) {
    update.slug = normalizeSlug(update.slug);
  }
  const current = await Brand.findById(id);
  if (!current) throw new ApiError(404, "Brand not found");
  if (update.name || update.slug) {
    const duplicate = await Brand.findOne({
      _id: { $ne: id },
      $or: [
        ...(update.name ? [{ name: update.name }] : []),
        ...(update.slug ? [{ slug: update.slug }] : []),
      ],
    });
    if (duplicate) {
      throw new ApiError(400, "Brand name or slug already exists");
    }
  }
  const brand = await Brand.findByIdAndUpdate(id, update, {
    returnDocument: "after",
    runValidators: true,
  });
  return brand;
};

const deleteBrandById = async (id) => {
  const current = await Brand.findById(id);
  if (!current) {
    throw new ApiError(404, "Brand not found");
  }
  const used = await Product.exists({ brand: id });
  if (used) {
    throw new ApiError(400, "Cannot delete brand in use by products");
  }
  await Brand.findByIdAndDelete(id);
  return { message: "Brand deleted successfully" };
};

module.exports = { createBrand, updateBrandById, deleteBrandById };
