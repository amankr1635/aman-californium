const mongoose = require("mongoose");

const customerSchema = new mongoose.schema({

    firstName : string,
    lastName : string,
    mobileNumber : {
      type :  String 
    //   10 digits long
    },   
    DOB : date,
    emailID :{
        type : String, 
        // abc@xyz.com
    }, 
    address: String,
    customerID : {
        type :String,
        //  UUID
    },
    status : String


})