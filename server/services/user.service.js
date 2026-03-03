const User = require("../models/User");
const ApiError = require("../utils/ApiError");

const getMe = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
};

const updateMe = async (userId, payload) => {
  const allowed = ["fullName", "phone", "avatar"];
  const update = Object.fromEntries(
    Object.entries(payload).filter(([key]) => allowed.includes(key)),
  );
  const user = await User.findByIdAndUpdate(userId, update, {
    new: true,
  });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
};

module.exports = {
  getMe,
  updateMe,
};
