const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"],
        minlength: [2, "Name should have more than 2 characters"],
        maxlength: [20, "name shouldn't exceed 20 chars"],
    },
    email:{
        type: String,
        required: [true, "ENter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter your email"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("user", userSchema);