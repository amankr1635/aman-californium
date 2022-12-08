const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logger = require('./../logger/logger');
const helper = require('./../util/helper');
const formatter = require('./../validator/formatter');
const lodash = require('lodash')



router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)
    logger.greet("Aman kumar")
    console.log("Today's Date is :-", helper.currentDate)
    helper.batchDetails()
    formatter.trim('  functionUp  '  )
    formatter.lowerCase("AmAN KumAR")
    formatter.upperCase("AmAN KumAR")

     let result = lodash.chunk(["janauary", "february", "march", "April", "may", "june", "july", "August", "september","octuber", "november","December"], 3)
    console.log(result)

    let oddNumber = [1,3,5,7,9,11,13,15,17,19]
     let result3 = lodash.tail(oddNumber)
     console.log(result3)

     let arr1 = [1,2,3]
     let arr2 = [2,3,4,5,6]
     let arr3 = [5,6,7,8,9,10,11]
     let arr4 = [10,8,9,11,12,13,14,15]
     let arr5 = [8,9,10,16,17,12,15,18,19]
      let result4 = lodash.union(arr1,arr2,arr3,arr4,arr5)
      console.log(result4)

     let pair1 = ["horror","The Shining"];
     let pair2 = ["drama”,”Titanic"]
     let pair3 = ["thriller","Shutter Island"]
     let pair4 = ["fantasy","Pans Labyrinth"]
    let result5 = ([pair1,pair2,pair3,pair4,])
    console.log(result5)


    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result1 = _.first(days, 4)
    console.log(`Result from underscore function is ${result1}`)



    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;