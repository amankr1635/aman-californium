const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first api!')
});

router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("My Name Is Aman Kumar")
});
module.exports = router;