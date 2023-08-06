const mongoose = require('mongoose');

const User = require('../models/user');

module.exports.home = function(req,res){
    res.render('home');
}
module.exports.signup = function(req,res){
    res.render('sign-up');
}
module.exports.dashboard = function(req,res){
    res.render('dashboard');
}
module.exports.create = async function(req,res){
    console.log(req.body);
    try{
        let result = await User.findOne({
            "email" : req.body.email
        });
        if(!result){
            try{
                let newuser = await User.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                qualification : req.body.qualification,
                address : req.body.address,
                city : req.body.city,
                branch : req.body.branch,
                country : req.body.country,
                phone : req.body.phone,
                zipcode : req.body.zipcode,
                trainingtype : req.body.trainingtype,
                username : req.body.username,
                course : req.body.course
                });
                console.log('Successfully created new user ',newuser);
                res.redirect('/');
            }catch(err){
                console.log('error in creating the new user ');
                return res.redirect('/');
            }
        }
    }catch(err){
        console.log('error in finding the user with given email and name and password :',err);
    }
    
}
module.exports.login = async function(req,res){
    console.log(req.query);
    try {
        let result = await User.findOne({
            "email" : req.query.email
        })
        console.log(result);
        console.log(req.query.password);
        if(result.password === req.query.password){
             console.log(result);
        res.render('dashboard',{user:result});
        }
       
        
    } catch (error) {
        console.log('error in finding the user with given email and name and password :',error);
    }
}