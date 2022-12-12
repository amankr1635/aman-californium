const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


    let arr= [1,2,3,5,6,7]
 router.get('/sol1', function (req, res){
    let n = arr.length+1
    let s= n*(n+1)/2
    let x = 0
    for (let i = 0; i< arr.length;i++){
        x += arr[i]
    }
    let missingNumber =(s-x)
    res.send({ data: missingNumber  })
})
let arr2= [33, 34, 35, 37, 38]

router.get("/sol2", function(req, res){
    let n = arr2.length+1
    let s = n*(arr2[0] + arr2[arr2.length-1]) / 2
    let x = 0
    for (let i =0 ; i <arr2.length ; i++){
        x += arr2[i]
    }
    let missingNumber =(s-x)
    res.send({data : missingNumber})
})
 
router.get('/text',function(req, res){
    
    res.send("sending in server")
})

module.exports = router;