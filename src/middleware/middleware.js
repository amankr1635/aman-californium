const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const isValidation =function(req,res,next){
    let validData = req.headers.isfreeappuser;
    // console.log(validData)
    if(validData != undefined ){
        next();
    }else{
        return res.send({msg : "Request is missing it is a MANDATORY HEADER"}) 
    }
 }

 const userCheck = async function(req,res,next){
    let data = req.body
    let userDetails = await userModel.findOne({_id : data.userId})
    let productDetails = await productModel.findOne({_id : data.productId})
    // console.log(userDetails)
    next()
 }


module.exports.isValidation = isValidation
module.exports.userCheck = userCheck





