const mongoose = require("mongoose");
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');



const isValidation =function(req,res,next){
    req.headers = isFreeAppUser

    let validData = req.headers[isFreeAppUser]

    if(validData){
        next()
    }else{
        return res.send({msg : "Request is missing it is a MANDATORY HEADER"}) 
    }

}

module.exports.isValidation = isValidation









