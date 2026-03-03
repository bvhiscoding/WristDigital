const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const authService = require("../services/auth.service");

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone } = req.body;
  const response = await authService.register({
    fullName,
    email,
    password,
    phone,
  });
  new ApiResponse(201, response, "User registered successfully").send(res);
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const response = await authService.login(email, password);
  new ApiResponse(200, response, "User logged in successfully").send(res);
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const response = await authService.forgotPassword(email);
  new ApiResponse(200, response, "Reset token sent to email").send(res);
});

const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const response = await authService.resetPassword(token, password);
  new ApiResponse(200, response, "Password reset successful").send(res);
});

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
