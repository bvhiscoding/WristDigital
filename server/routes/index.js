const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const brandRoutes = require("./brand.route");
const categoryRoutes = require("./category.route");
const productRoutes = require("./product.route");
const adminRoutes = require("./admin/index");
const router = express.Router();
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/brands", brandRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/admin", adminRoutes);
module.exports = router;
