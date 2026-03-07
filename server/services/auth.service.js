const User = require("../models/User");
const ApiError = require("../utils/ApiError");
const { signToken } = require("../utils/jwt");
const { generateResetToken } = require("../utils/crypto");
const crypto = require("crypto");

const sanitizeUser = (userDoc) => {
  const user = userDoc.toObject ? userDoc.toObject() : { ...userDoc };
  delete user.password;
  return user;
};

const register = async (userData) => {
  const { fullName, email, password, phone } = userData;

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new ApiError(400, "Email already exists");
  }
  const user = await User.create({ fullName, email, password, phone });
  const token = signToken(user._id);

  return { user: sanitizeUser(user), token };
};

const login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }
  const isPasswordMatch = await user.matchPassword(password);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  if (!user.isActive) {
    throw new ApiError(403, "Your account has been deactivated");
  }

  const token = signToken(user._id);

  return { user: sanitizeUser(user), token };
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "No user found with that email");
  }
  const { token, hashedToken } = generateResetToken();

  user.passwordResetToken = hashedToken;
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  // Implement email sending later

  return {
    message: "Password reset token sent to your email",
  };
};

const resetPassword = async (token, newPassword) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired reset token");
  }

  user.password = newPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  const newToken = signToken(user._id);
  return { message: "Password reset successful", token: newToken };
};

const updatePassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId).select("+password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const isMatch = await user.matchPassword(currentPassword);
  if (!isMatch) {
    throw new ApiError(401, "Current password is incorrect");
  }

  user.password = newPassword;
  await user.save();

  const token = signToken(user._id);
  return { message: "Password updated successfully", token };
};
module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
};
