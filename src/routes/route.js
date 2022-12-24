const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const middleware = require("../middleware/middleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createProduct', controller.product)
router.post('/createUser',middleware.isValidation, controller.user)
router.post('/createOrder',middleware.isValidation, controller.order)

module.exports = router;