const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const routes = require("./routes/index");
const { notFound } = require("./utils/notFound.js");
const { errorHandler } = require("./utils/errorHandler.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/v1", routes);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
