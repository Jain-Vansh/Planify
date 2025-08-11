const express = require("express")
const {User} = require("./database")
const {userExists,checkUserParamCount,validateUserParams} = require("./middleware")

const app = express()

app.use(express.json())

app.post("/signup",userExists,checkUserParamCount,validateUserParams, async (req,res) => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstName
    const lastName = req.body.lastName



    const newUser = await User.create({
        email : email,
        password : password,
        firstName : firstname,
        lastName : lastName
    })

    if(newUser){
        res.status(201).json({
            success : true,
            message : "User Created successfully" 
        })
    }
    else{
        res.status(400).json({
            success : false,
            message : "Invalid syntax or parameters"
        })
    }

})

app.listen(3000)