const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userCreate = async function(req,res){
    let data = req.body
    let createdUser = await userModel.create(data)
    res.send({status : true, data:createdUser})
}

const signUp = async function(req,res){
    let data = req.body
    let createdlogin = await userModel.findOne({emailId:'data.emailId'})
     let result =  await jwt.sign({createdlogin:data.emailId}, "logInCreated")
    res.send({status:true,response:result})
}

module.exports.userCreate = userCreate
module.exports.signUp = signUp
