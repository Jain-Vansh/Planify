const {validateUser} = require("./validations")
const z = require("zod")
const {User} = require("./database")

const userExists = async (req,res,next) => {
    const email = req.body.email
    const exists = await User.findOne({email : email})
    if(exists){
        res.status(409).json({
            success : false,
            message : "Email already exists"
        })
    }
    else{
        next()
    }
}

const checkUserParamCount = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    if(email == undefined || email == null){
        res.status(400).json({
            success : false,
            message : "Email is required"
        })
    }
    else if(password == undefined || password == null){
        res.status(400).json({
            success : false,
            message : "Password is required"
        })
    }
    else if(firstName == undefined || firstName == null){
        res.status(400).json({
            success : false,
            message : "First name is required"
        })
    }
    else if(lastName == undefined || lastName == null){
        res.status(400).json({
            success : false,
            message : "Last name is required"
        })
    }
    else{
        next()
    }
}

const validateUserParams = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const result = validateUser(email,password,firstName,lastName)

    if(result.success){
        next()
    }
    else{
        res.status(400).json({
            success : false,
            message : z.treeifyError(result.error)
        })
    }
}


module.exports = {
    userExists,
    checkUserParamCount,
    validateUserParams
}