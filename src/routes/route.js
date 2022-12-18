const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers')
const bookModels= require('../models/bookModels')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook', bookControllers.createbook)

router.get('/allBooks', bookControllers.allBooks)

router.get('/bookList', bookControllers.bookList)





module.exports = router;