const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userCreate = async function(req,res){
    try{
    let data = req.body
    let createdUser = await userModel.create(data)
    res.status(201).send({status : true, data:createdUser})
}catch(error){
    res.status(500).send({msg : error.message})
}
}

const loginUser = async function(req,res){
    try{
    let data = req.body
    let emailId = await userModel.findOne({emailId:'data.emailId'})
    let result =  await jwt.sign({emailId:data.emailId}, "logInCreated")
    res.status(200).send({status:true,response:result})
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}

const getUser = async function(req,res){
    try{
    let pData = req.params.userId
    let userDetails = await userModel.find({_id : pData})
    res.status(200).send({status: true, return : userDetails})
}catch(error){
    res.status(500).send({msg: error.message})
}   
}              
const updateUser = async function(req,res){
    try{
    let pData = req.params.userId
    let bData = req.body
    let updatedUser = await userModel.findOneAndUpdate({_id:pData},{$set : bData},{new:true})
    res.status(204).send({status:true , result : updatedUser})
}catch(error){
    res.status(500).send({msg:error.message})
}
}

const userDelete = async function(req,res){
    try{
    let pData = req.params.userId
    let userDetails = await userModel.findOneAndUpdate({_id:pData}, {$set:{isDeleted : true}} , {new:true})
    res.status(204).send({status:true, result: userDetails})
}catch(error){
    res.status(500).send({msg: error.message})
}
}


module.exports.userCreate = userCreate
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser =updateUser
module.exports.userDelete =userDelete



