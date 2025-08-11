const express = require("express")
const {User} = require("./database")
const {userExists,validateUserParams} = require("./middleware")

const app = express()

app.use(express.json())

app.post("/signup",userExists,validateUserParams, async (req,res) => {
    const {email, password, firstName, lastName} = req.body

    const newUser = await User.create({
        email : email,
        password : password,
        firstName : firstName,
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


app.get("/login", async (req,res) => {
    const {email, password} = req.body
    const fetchData = await User.findOne({email:email, password:password})

    if(fetchData){
        res.status(200).json({
            success : true,
            data : fetchData
        })
    }
    else{
        res.status(401).json({
            success : false,
            message : "Invalid credentials"
        })
    }
})

app.listen(3000)