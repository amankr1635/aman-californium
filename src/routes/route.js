const express = require('express');
const router = express.Router();
const controller =require("../controllers/controller");
const midd1 = require("../midleware/middleware");

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/user', controller.userCreate)
router.post('/login', midd1.validation, controller.signUp) 
module.exports = router;