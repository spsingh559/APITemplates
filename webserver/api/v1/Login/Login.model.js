var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyApp');

var userSchema = new mongoose.Schema({
    _id:Number,
    userName:String,
    userPassword:String,
    userConfirmPassword:String
});

var userModel = mongoose.model('logindetails', userSchema);

exports = module.exports = userModel;
