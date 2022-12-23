const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createProduct', controller.product)
router.post('/createUser', controller.user)

module.exports = router;