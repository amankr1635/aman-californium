const express = require('express');
const router = express.Router();
const bookController = require("../controllers/controllers");

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post("/createBook", bookController.creatBook);
router.post("/createAuthor", bookController.createAuthor);
router.get('/getListOfBook', bookController.listOfBook );
router.get('/getAuthorName',bookController.getAuthorName);
router.get('/getAnyBetween', bookController.findBetween);




module.exports = router;