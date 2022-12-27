const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userValidation = async function(req,res,next){
    let eData = req.body.emailId
    let pData = req.body.password
    let userDetails = await userModel.findOne({emailId :eData  , password: pData})
    if(!userDetails){
    return res.send({status:false, msg : "INVALID USERID OR PASSWORD "})
  }
    next()
 }

const hValidation = async function(req,res,next){
    let hData = req.headers["x-auth-token"]
    if(!hData){
        return res.send({status:false , msg: "Header Is Missing"})
    }
    let userCheck = jwt.verify(hData,"logInCreated")
    next()
}



module.exports.userValidation = userValidation
module.exports.hValidation = hValidation

