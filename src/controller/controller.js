const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");
const {isValidObjectId, default: mongoose} = require('mongoose')

const product = async function(req,res){
    let data = req.body
    let createdProduct = await productModel.create(data)
    res.send({result:createdProduct})
}
const user =async function(req,res){
    let data = req.body
    let createdUser = await userModel.create(data)
    res.send({result:createdUser})
}
const order = async function (req,res){
    
    let data = req.body
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
    const createData = await orderModel.create(data)
    return res.send({msg:createData})
    }
}
}










// if(!isValidObjectId(data.userId )|| !isValidObjectId(data.productId)){
//         res.send({msg : "ERROR Please Enter Valid Details" })
//         }
//     }else{
//     let createOrder = await orderModel.create(data)
//     res.send({result: createOrder})
// }
// }





module.exports.product =  product
module.exports.user =  user
module.exports.order = order

