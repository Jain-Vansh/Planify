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
    validateUserParams
}