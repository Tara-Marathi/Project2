const mongoose = require("mongoose");//import mongoose to create schema

const internSchema = new mongoose.Schema({
    name: { type: String, required: true,trim:true},

    email: { type: String, required: true, unique: true,trim:true},

    mobile: { type: Number, required: true, unique: true},

    collegeId: {type: mongoose.Schema.Types.ObjectId,ref: "college"},

    isDeleted: { type: Boolean, default: false},
    
    },{timestamps: true})

    module.exports = mongoose.model("intern", internSchema);
    // models are higher order constructors which create document with the help of schema


