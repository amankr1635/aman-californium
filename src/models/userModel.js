const mongoose = require("mongoose")


const userSchema = new mongoose.schema({
    name:String,
	category:String,
	price: {
        type : Number,
        required: true
    },
},{timestamps : true})

module.exports = mongoose.model("newUser", userSchema)