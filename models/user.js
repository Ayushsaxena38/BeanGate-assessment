//first import/require the mongoose library
const mongoose = require('mongoose');
//define the task Schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        rquired : true
    },
    password : {
        type : String,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    zipcode : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    trainingtype : {
        type : String
    },
    course : {
        type : String,
        required : true
    }

});
//collect the instance of Schema
const User = mongoose.model('User',userSchema);
//export the Schema
module.exports = User;