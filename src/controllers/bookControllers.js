const mongoose = require('mongoose')
const bookModel = require ('../models/bookModels')

const createBook = async function(req, res){
    let bookData = req.body
    let finalData = await bookModel.create(bookData)
    res.send({response:finalData})
}

const allBooks = async function(req, res){
    let findList= await bookModel.find()
    res.send({response:findList})
}

const bookList = async function (req, res){
    let findList = await bookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({response:findList})
}

module.exports.allBooks= allBooks
module.exports.bookList = bookList
module.exports.createbook = createBook