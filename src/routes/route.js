const express = require('express');
const router = express.Router();
const controller = require("../controller/controllers")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor', controller.createAuthor)
router.post('/createPublisher', controller.createPublisher)
router.post('/createBook', controller.createBook)
router.get('/getAllBookByID', controller.allBook)
router.put('/books', controller.someBook)
router.put('/updatedPrice', controller.updatePrice)



module.exports = router;