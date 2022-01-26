const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name: {
        type:String,
        required:true
    },
    surname: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    
    address: {
        type:String,
        required:true
    },

    country : {
        type:String,
        required:true
    },

    education: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true,
        unique:true
    },

    username: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true
    },

    conf_password: {
        type:String,
        required:true
    },
})

// Collections

const Register = new mongoose.model("Register",userSchema)

module.exports = Register;