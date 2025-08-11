const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.0xx9rtw.mongodb.net/")

const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = {
    User
}