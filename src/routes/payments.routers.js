const express = require('express');
const router = express.Router();
const paymentController = require('../contollers/paymentController.js');
router.post('/orders', paymentController.placeOrder);
router.post("/success", paymentController.paymentSuccessful);
module.exports = router;