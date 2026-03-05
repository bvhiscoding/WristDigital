const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const routes = require("./routes/index");
const { notFound } = require("./utils/notFound.js");
const { errorHandler } = require("./utils/errorHandler.js");
const app = express();

// XSS sanitizer compatible with Express 5 (fixes xss-clean incompatibility)
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
function sanitizeDeep(val) {
  if (typeof val === "string") return escapeHtml(val);
  if (Array.isArray(val)) return val.map(sanitizeDeep);
  if (val && typeof val === "object") {
    const out = {};
    for (const k of Object.keys(val)) out[k] = sanitizeDeep(val[k]);
    return out;
  }
  return val;
}

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use((req, _res, next) => {
  if (req.body) req.body = sanitizeDeep(req.body);
  next();
});
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1", routes);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
