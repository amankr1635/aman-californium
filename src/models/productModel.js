const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:String,
	category:String,
	price:{
        type : Number,
        default : 70
     }, //mandatory property

})

module.exports = mongoose.model("newProdut", productSchema)