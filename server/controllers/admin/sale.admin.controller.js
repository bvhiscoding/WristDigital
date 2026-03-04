const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/sale.admin.service");

const listSales = asyncHandler(async (req, res) => {
  const data = await service.listSales(req.query);
  return new ApiResponse(200, data, "Sales fetched successfully").send(res);
});

const getSaleById = asyncHandler(async (req, res) => {
  const data = await service.getSaleById(req.params.id);
  return new ApiResponse(200, data, "Sale fetched successfully").send(res);
});

const createSale = asyncHandler(async (req, res) => {
  const data = await service.createSale(req.body);
  return new ApiResponse(201, data, "Sale created successfully").send(res);
});

const updateSale = asyncHandler(async (req, res) => {
  const data = await service.updateSaleById(req.params.id, req.body);
  return new ApiResponse(200, data, "Sale updated successfully").send(res);
});

const deleteSale = asyncHandler(async (req, res) => {
  const data = await service.deleteSaleById(req.params.id);
  return new ApiResponse(200, data, data.message).send(res);
});

module.exports = {
  listSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
};
