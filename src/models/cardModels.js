const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({
cardNumber : {
    type: String 
// Auto_increment e.g: C001
},
cardType : {
    type : String,
    enum : [REGULAR/SPECIAL]
},
customerName : String,
status :{
    type: String,
     enum : ["ACTIVE","INACTIVE"],
     Default: "ACTIVE"
},
vision : String,
customerID : {
    type :ObjectId,
    ref :  "customer"
},
}, {timestamps: true})

module.exports = mongoose.model("cardData",cardSchema)