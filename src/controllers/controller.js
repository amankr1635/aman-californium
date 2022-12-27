const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userCreate = async function(req,res){
    let data = req.body
    let createdUser = await userModel.create(data)
    res.send({status : true, data:createdUser})
}

const loginUser = async function(req,res){
    let data = req.body
    let createdlogin = await userModel.findOne({emailId:'data.emailId'})
    let result =  await jwt.sign({createdlogin:data.emailId}, "logInCreated")
    res.send({status:true,response:result})
}

const getUser = async function(req,res){
    let pData = req.params.userId

    let userDetails = await userModel.find({pData})
    res.send({status: true, return : userDetails})
}                 
const updateUser = async function(req,res){
    let pData = req.params.userId
    let bData = req.body
    // let userDetails = await userModel.find({pData})
    let updatedUser = await userModel.findOneAndUpdate({_id:pData},{$set : bData},{new:true})
    res.send({status:true , result : updatedUser})
}

const userDelete = async function(req,res){
    let pData = req.params.userId
    let userDetails = await userModel.findOneAndUpdate({_id:pData}, {$set:{isDeleted : true}} , {new:true})
    res.send({status:true, result: userDetails})


}



module.exports.userCreate = userCreate
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser =updateUser
module.exports.userDelete =userDelete

