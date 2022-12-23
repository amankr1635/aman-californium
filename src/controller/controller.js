const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");


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





module.exports.product =  product
module.exports.user =  user
