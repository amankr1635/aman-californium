const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
 
const orderSchema = new mongoose.Schema({
    userId: {
        type : ObjectId,
        ref : "newUser"
    },
    productId: {
        type : ObjectId,
        ref : "newProdut"
    },
    amount: Number,
	isFreeAppUser: {
        type: Boolean,
        default :true, 
	date: "22/11/2021"
    },
},{timestamps : true})

module.exports = mongoose.model("newOrder",orderSchema)