const ApiError = require("../utils/ApiError");

const parseProductPayload = (req, res, next) => {
  if (!req.body?.payload) {
    return next();
  }
  try {
    const parsed = JSON.parse(req.body.payload);
    req.body = parsed;
    return next();
  } catch (error) {
    throw new ApiError(400, "Invalid JSON in payload field");
  }
};

module.exports = parseProductPayload;
