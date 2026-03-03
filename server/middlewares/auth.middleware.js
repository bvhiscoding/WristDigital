const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { verifyToken } = require("../utils/jwt");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    throw new ApiError(401, "Not authorized, no token provided");
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      throw new ApiError(401, "User no longer exists");
    }
    if (!user.isActive) {
      throw new ApiError(403, "Your account has been deactivated");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Not authorized, token failed");
  }
});

module.exports = protect
