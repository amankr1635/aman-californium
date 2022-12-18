const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const bookController = require("../controllers/bookControler")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.post("/bookSchema", bookController.bookSchema)

router.get("/getBookList", bookController.getBookList)


module.exports = router;