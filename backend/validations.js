const z = require("zod")

const userValidations = z.object({
    email : z.email({message : "Invalid email address"}).nonempty(),
    password : z.string().min(8,{message : "Password must be atleast 8 characters long"})
    .max(32, {message : "Password must be atmost 32 characters long"})
    .regex(/[A-Z]/, {message : "Password should contain an uppercase"})
    .regex(/[a-z]/, {message : "Password should contain a lowercase"})
    .regex(/\d/, {message : "Password should contain a number"})
    .regex(/[!@#$%^&*=+:;.]/, {message : "Password should contain a special character"})
    .nonempty(),
    firstName : z.string().nonempty({message : "first name is missing"}),
    lastName : z.string().nonempty({message : "last name is missing"})
})

const validateUser = (email,password,firstName,lastName) => {
    const result = userValidations.safeParse({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    return result
}

module.exports = {
    validateUser
}