const router = require("express").Router(); 
const productController = require("../controllers/product.controller"); 
const validate = require("../middlewares/validate.middleware"); 
const { productQuerySchema } = require("../validations/catalog.validation"); 
router.get("/", validate({ query: productQuerySchema }), productController.getProducts);
router.get("/:slug", productController.getProductBySlug); 
module.exports = router; 