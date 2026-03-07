const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { sanitizeXSS, sanitizeMongo } = require("./utils/sanitize.js");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const routes = require("./routes/index");
const { notFound } = require("./utils/notFound.js");
const { errorHandler } = require("./utils/errorHandler.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Express 5 compatible sanitization
app.use((req, _res, next) => {
  if (req.body) {
    req.body = sanitizeMongo(req.body);
    req.body = sanitizeXSS(req.body);
  }
  if (req.query) {
    req.query = sanitizeMongo(req.query);
  }
  if (req.params) {
    req.params = sanitizeMongo(req.params);
  }
  next();
});
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1", routes);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
