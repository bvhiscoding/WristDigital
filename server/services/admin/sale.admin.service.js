const Sale = require("../../models/Sale");
const ApiError = require("../../utils/ApiError");
const { recalculateProductSaleSnapshots } = require("../pricing.service");

const listSales = async (query) => {
  const page = Number(query.page || 1);
  const limit = Number(query.limit || 10);
  const skip = (page - 1) * limit;

  const filter = {};
  if (query.isActive !== undefined) filter.isActive = query.isActive;
  if (query.q) filter.name = { $regex: query.q, $options: "i" };

  const [items, total] = await Promise.all([
    Sale.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Sale.countDocuments(filter),
  ]);

  return {
    items,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

const getSaleById = async (id) => {
  const sale = await Sale.findById(id);
  if (!sale) throw new ApiError(404, "Sale not found");
  return sale;
};

const createSale = async (payload) => {
  const sale = await Sale.create(payload);
  await recalculateProductSaleSnapshots();
  return sale;
};

const updateSaleById = async (id, payload) => {
  const sale = await Sale.findByIdAndUpdate(id, payload, {
    returnDocument: "after",
    runValidators: true,
  });
  if (!sale) throw new ApiError(404, "Sale not found");
  await recalculateProductSaleSnapshots();
  return sale;
};

const deleteSaleById = async (id) => {
  const sale = await Sale.findById(id);
  if (!sale) throw new ApiError(404, "Sale not found");
  await Sale.findByIdAndDelete(id);
  await recalculateProductSaleSnapshots();
  return { message: "Sale deleted successfully" };
};

module.exports = {
  listSales,
  getSaleById,
  createSale,
  updateSaleById,
  deleteSaleById,
};
