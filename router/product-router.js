const express  = require('express');
const router =express.Router();
const productController =require("../controller/product-controller");

router.get("/products",productController )

module.exports = router;