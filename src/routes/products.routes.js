var express = require('express');
const router = express.Router();
const productController = require('../contollers/productController.js');
router.post('/', productController.addProduct);
router.post('/getProduct', productController.getProduct);
router.post('/getAllProducts', productController.getAllProducts);
router.post('/getProductsByPageNumber', productController.getProductsByPageNumber);
module.exports = router;