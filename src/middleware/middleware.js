const { isValidObjectId } = require("mongoose");
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
    let headers = req.headers.isfreeappuser
    if(!isValidObjectId(data.userId)){
        res.send({msg : "user Id invalid"})
    }if(!isValidObjectId(data.productId)){
        res.send({msg : "product id is invalid"})
    }
    let userDetails = await userModel.findOne({_id : data.userId})
    // let productDetails = await productModel.findOne({_id : data.productId})
    // console.log(userDetails)
    if (headers == "true"){
        data.amount = 0
        return next()
    }
    if (headers == "false"){
        let accBalance = userDetails.balance
        let price = data.amount
        if(price>accBalance){
           return res.send({msg : "Insufficient Balance"})
        }else{
        let finalBal = accBalance-price
        let finalOutput = await userModel.findOneAndUpdate(
            {_id:data.userId},
            {$set:{balance:finalBal}},
            {new:true}
        )
        }
    }
  
    next()
 }


module.exports.isValidation = isValidation
module.exports.userCheck = userCheck