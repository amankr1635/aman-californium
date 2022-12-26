const mongoose = require("mongoose");

const customerSchema = new mongoose.schema({

    firstName : String,
    lastName : String,
    mobileNumber : {
      type : String,
      min : 10,
      max : 10
    },   
    DOB : date,
    emailID :{
        type : String, 
        // abc@xyz.com
    }, 
    address: String,
    customerID : {
        type :String,
        unique : true
        //  UUID
    },
    status :{
        type : String,
        enum : ["ACTIVE", "INACTIVE"]
    } 


},{timestamps: true})
module.exports =mongoose.model("customer", customerSchema)