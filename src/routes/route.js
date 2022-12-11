const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})
// 1. problem :-

router.get('/movies',function(req, res){
    const movieList =(['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'] )
    res.send(movieList)
})
// 2. & 3. Problem :-
let movieName =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

router.get('/movies/:indexNumber',function (req, res){
    if(movieName.length > req.params.indexNumber){
        res.send(movieName[req.params.indexNumber])
    }else(
        res.send("Index no. INVALID, please enter a valid INDEX ")
    )
})
// 4. Problem :-

    router.get('/films', function(req,res){
     let movieList =   [ {
                'id': 1,
                'name': 'The Shining'
            }, {
                'id': 2,
                'name': 'Incendies'
            }, {
                'id': 3,
                'name': 'Rang de Basanti'
            }, {
                'id': 4,
                'name': 'Finding Nemo'
            }]
            res.send(movieList)
    })

    //  5. Problem :-

    router.get('/films/:filmId', function (req, res){
        let movieList =   [ {
            'id': 1,
            'name': 'The Shining'
        }, {
            'id': 2,
            'name': 'Incendies'
        }, {
            'id': 3,
            'name': 'Rang de Basanti'
        }, {
            'id': 4,
            'name': 'Finding Nemo'
        }]
        if(movieList.length >= req.params.filmId){
            res.send(movieList[req.params.filmId-1])
        }else(
            res.send("No movie exists with this id ")
        )

    })



// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out where name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send(req.params.name)
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    req.query.size
    req.query.brand
    res.send("dummy shoes response")
})

module.exports = router;