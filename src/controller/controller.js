const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");
const {isValidObjectId, default: mongoose} = require('mongoose');
const { validate } = require("../models/userModel");

const product = async function(req,res){
    let data = req.body
    let createdProduct = await productModel.create(data)
    res.send({result:createdProduct})
}
const user =async function(req,res){
    let data = req.body
    data.isFreeAppUser = req.headers.isfreeappuser
    let createdUser = await userModel.create(data)
    res.send({result:createdUser})
}
const order = async function (req,res){
    let data = req.body
    // let hData = req.headers
    
    // if(!isValidObjectId(data.userId )){
    // res.send({msg : "ERROR Please Enter Valid USER-ID" })
    // }else if( !isValidObjectId(data.productId)){
    //     res.send({msg: "ERROR Please Enter Valid PRODUCT-ID"})
    // }
     let finalData = await orderModel.create(data)
     res.send({msg : finalData})
    }







/*
if(req.headers.freeusers == "true"){

    Object.assign({isFreeAppUser : true,amount : 0},data)
    let createOrder = await orderModel.create(data)
res.send({result: createOrder})
}
else {
    const getUsersid = await userModel.findById(data.userId)
    const getProductid = await productModel.findById(data.productId)
    if(getUsersid.balance>getProductid.price){
        const updated_user =await userModel.findByIdAndUpdate(data.userId,
        {$inc : {balance: -getProductid.price}})
data.amount = getProductid.price

*/ 


module.exports.product =  product
module.exports.user =  user
module.exports.order = order

