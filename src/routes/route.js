const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers')



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



router.post('/createBook', bookControllers.createBook)

router.get('/bookList', bookControllers.getBookList)

router.get('/getBookInYear/:year', bookControllers.bookListInYear)

router.get('/getParticularBook', bookControllers.ParticularBooks)

router.get('/getXINRBooks', bookControllers.iNRBooks)

router.get('/getRandomBooks', bookControllers.randomBook)





module.exports = router;