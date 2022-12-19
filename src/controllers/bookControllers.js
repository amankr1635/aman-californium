const mongoose = require('mongoose')
const bookModel = require ('../models/bookModels')

const createBook = async function(req, res){
    let bookData = req.body
    let finalData = await bookModel.create(bookData)
    res.send({msg :finalData})
}


const getBookList = async function (req, res){
    let result = await bookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg : result})
}

const bookListInYear =async function(req,res){
    let data = req.params.year
    let result = await bookModel.find({year : {$eq :data }})
    res.send({msg:result})
}
const ParticularBooks = async function(req,res){

    let result =await bookModel.find(req.body)
res.send({msg : result})
}


// const ParticularBooks = async function(req,res){
//     let bookName =req.body.bookName
//     let price = req.body.price.indianPrice
//     let year = req.body.year
//     let tags = req.body.tags
//     let authorName =req.body.authorName
//     let totalPages = req.body.totalPages
//     let stockAvailable = req.body.stockAvailable
//     let result =await bookModel.find({$or:[{bookName},{price},{year},{tags},{authorName},{totalPages},{stockAvailable}]})
// res.send({msg : result})
// }



const iNRBooks =async function(req,res){
    let result = await bookModel.find({ "price.indianPrice" : { $in : [ "₹100", "₹200", "₹500"]} }) 
    res.send({msg : result})
}
const randomBook = async function(req,res){
    let finalData = await bookModel.find({$or:[{stockAvailable : true},{totalPages:{$gt :500}}]})
    res.send({msg : finalData})
}

// module.exports.createbook = createBook
// module.exports.getBookList= getBookList
// module.exports.bookListInYear = bookListInYear
// module.exports.ParticularBooks = ParticularBooks
// module.exports.iNRBooks = iNRBooks
// module.exports.randomBook = randomBook


 module.exports= {createBook, randomBook,getBookList,bookListInYear,iNRBooks,ParticularBooks} 
