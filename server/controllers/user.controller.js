const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const userService = require("../services/user.service"); // service user
const authService = require("../services/auth.service");

const getMe = asyncHandler(async (req, res) => {
  const response = await userService.getMe(req.user.id);
  new ApiResponse(200, response, "Profile fetched").send(res);
});

const updateMe = asyncHandler(async (req, res) => {
  const response = await userService.updateMe(req.user.id, req.body);
  new ApiResponse(200, response, "Profile updated").send(res);
});

const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const response = await authService.updatePassword(
    req.user.id,
    currentPassword,
    newPassword,
  );
  new ApiResponse(200, response, "Password updated").send(res);
});
module.exports = { getMe, updateMe, updatePassword };
