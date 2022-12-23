const bookModel = require("../models/bookModels");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const {isValidObjectId, default: mongoose} = require('mongoose')



const createAuthor =async function(req,res){
    let author = req.body
    const authorCreated = await authorModel.create(author)
    res.send({msg: authorCreated})
}
const createPublisher = async function(req,res){
    let publisher = req.body
    const publisherCreated = await publisherModel.create(publisher)
    res.send({msg: publisherCreated})
}

const createBook =  async function(req,res){
     let book = req.body;
    if(!book.author ){
      return  res.send({msg : "Please Enter Author Details"})
    }else if(!isValidObjectId(book.author)){
        return res.send({ msg :"INVALID Author Id"})
    }else if(!book.publisher){
        return res.send ({msg : "Please Enter Publisher Details"})
    }else if (!isValidObjectId(book.publisher)){
        return res.send ({msg : "INVALID Publisher Id"})
    }else{
        const bookCreated = await bookModel.create(book)
         return res.send({msg: bookCreated})
}
}
const allBook = async function(req, res){
    const completeData = await bookModel.find().populate('author').populate('publisher')

    res.send({msg:completeData })
}

const someBook = async function(req,res){
    const publishers = await publisherModel.find({name:{$in:['Penguin','HarperCollins']}})
    console.log(publishers)
    const publisherId = publishers.map(publisher => publisher._id)
    console.log(publisherId)

    const updateBook = await bookModel.updateMany(
        {publisher :{$in: publisherId}},
        {$set :{isHardCover :true}})
        res.send({msg: updateBook})
}


const updatePrice = async function (req , res){
    let author = await authorModel.find({rating:{$gt:3.5}})
    let authorId = author.map((x)=> x._id)
    let finalData = await bookModel.updateMany(
        {author:{$in:authorId}},
        {$set:{price:10}})
    res.send({response:finalData})
}



module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.allBook = allBook
module.exports.someBook = someBook
module.exports.updatePrice = updatePrice