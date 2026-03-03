const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const routes = require("./routes/index");
const { notFound } = require("./middlewares/notFound.js");
const { errorHandler } = require("./middlewares/errorHandler.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/vi", routes);
// app.use(notFound);
// app.use(errorHandler);
module.exports = app;
