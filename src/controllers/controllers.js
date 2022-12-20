const bookModel = require('../models/bookModels');
const authorModel = require("../models/authorModel");


const creatBook = async function(req,res){
    let data = req.body
    let createData = await bookModel.create(data)

    res.send({msg:createData})
}
const createAuthor =async function(req,res){
    let data = req.body
    let createData = await authorModel.create(data)
    res.send( { msg:createData } )
}
const listOfBook = async function(req,res){
    let data = req.body
    let getData =await authorModel.findOne(data)
    let id = getData.author_id
    let finalData = await bookModel.find({author_id:id})

   res.send({msg: finalData})
}


const getAuthorName =async function(req,res){
    let dataName =req.body.name
    let dataPrice =req.body.price
    let getData = await bookModel.findOneAndUpdate(
        {name:dataName},
        {$set:{price:dataPrice}},
        {new: true})
        console.log(getData)
    let finalAuthorName = await authorModel.findOne({author_id : getData.author_id})


    let finalAnswer= [{author_name: finalAuthorName.author_name,
    price:getData.price}]
    
    console.log(finalAnswer)
    res.send({msg:finalAnswer})
}


const findBetween = async function(req, res ){
    
    let getData = await bookModel.find({price : {$gte:50 , $lte:100}})
    let arr = getData.map((x)=> x.author_id )
    let booksInBetween = await authorModel.find({author_id: {$in: arr}})
    res.send({msg:booksInBetween})
}

module.exports.creatBook = creatBook
module.exports.createAuthor = createAuthor
module.exports.listOfBook = listOfBook
module.exports.getAuthorName = getAuthorName
module.exports.findBetween = findBetween

