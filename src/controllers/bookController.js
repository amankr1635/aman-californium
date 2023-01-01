const BookData = require("../models/bookModel")

const bookSchema= async function (req, res) {
    let data= req.body
    let savedData= await BookData.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allBooks= await BookData.find()
    res.send({msg: allBooks})
}

module.exports.bookSchema= bookSchema
module.exports.getBookList = getBookList