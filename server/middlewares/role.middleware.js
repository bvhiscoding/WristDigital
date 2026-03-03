const ApiError = require("../utils/ApiError");

const checkRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new ApiError(401, "Authentication required");
    }
    if (!roles.includes(req.user.role)) {
      throw new ApiError(
        403,
        `Access denied. Required roles: ${roles.join(", ")}`,
      );
    }
    next();
  };
};

module.exports = checkRole;
