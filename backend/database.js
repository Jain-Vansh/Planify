const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.0xx9rtw.mongodb.net/")

const UserSchema = mongoose.Schema({
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const User = mongoose.model("User", UserSchema)

module.exports = {
    User
}