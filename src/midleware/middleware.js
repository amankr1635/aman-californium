const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userValidation = async function (req, res, next) {
    try {
        let eData = req.body.emailId
        let pData = req.body.password
        let userDetails = await userModel.findOne({ emailId: eData, password: pData })
        if (!userDetails) {
            return res.status(401).send({ status: false, msg: "INVALID USER ID OR PASSWORD " })
        }
        next()
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const hValidation = async function (req, res, next) {
    try {
        let hData = req.headers["x-auth-token"]

        if (!hData) {
            return res.send({ status: false, msg: "Header Is Missing" })
        }
        let userCheck = jwt.verify(hData, "logInCreated")

        // if (!userCheck) {
        //     return res.send({ status: false, msg: "User Token Is Invalid" })
        // }
        let userModified = req.params.userId
        // let extId = await userModel.findOne({ emailId: userCheck.emailId })
        let extId = await userModel.findOne({ _id:userModified })

        // let userLoggedIn = extId._id
        if(userCheck.emailId != extId.emailId){
        // if (userLoggedIn != userModified) {
            return res.status(403).send({ status: false, msg: "you are not allowed to make change in others DATA" })
        }
        next()
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}



module.exports.userValidation = userValidation
module.exports.hValidation = hValidation

