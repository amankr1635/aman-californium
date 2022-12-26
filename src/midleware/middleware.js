const userModel = require("../models/userModel");

const validation = async function(req,res,next){
    let eData = req.body.emailId
    let pData = req.body.password
    let userDetails = await userModel.findOne({emailId:eData , password: pData})
if(!userDetails){
    return res.send({status:false, msg : "INVALID USERID OR PASSWORD "})
}
    next()
}

module.exports.validation = validation

