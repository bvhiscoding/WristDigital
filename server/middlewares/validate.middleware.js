const ApiError = require("../utils/ApiError");

const validate = (schema) => {
  return (req, res, next) => {
    const errors = [];
    const collectErrors = (result) => {
      const issues = result.error?.issues || result.error?.errors || [];
      return issues.map((e) => `${e.path.join(".")}: ${e.message}`);
    };
    // Validate req.body
    if (schema.body) {
      const result = schema.body.safeParse(req.body);
      if (!result.success) {
        errors.push(...collectErrors(result));
      } else {
        req.body = result.data;
      }
    }
    // Validate req.query
    if (schema.query) {
      const result = schema.query.safeParse(req.query);
      if (!result.success) {
        errors.push(...collectErrors(result));
      } else {
        req.query = result.data;
      }
    }
    // Validate req.params
    if (schema.params) {
      const result = schema.params.safeParse(req.params);
      if (!result.success) {
        errors.push(...collectErrors(result));
      } else {
        req.params = result.data;
      }
    }
    if (errors.length > 0) {
      throw new ApiError(400, errors.join("; "));
    }
    next();
  };
};

module.exports = validate;
