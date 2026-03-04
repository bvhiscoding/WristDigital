const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const service = require("../../services/admin/dashboard.admin.service");

const getOverview = asyncHandler(async (req, res) => {
  const data = await service.getOverview(req.query);
  return new ApiResponse(200, data, "Dashboard overview fetched successfully").send(
    res,
  );
});

module.exports = { getOverview };
