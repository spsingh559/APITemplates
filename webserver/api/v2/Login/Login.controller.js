var controller={};
var UserModel=require('./../../v1/Login/Login.model');

controller.loginData=function(req,res){
  
  UserModel.find({userName:req.body.userName}).exec(function(err,data){
    console.log('data reached to login');
          console.log(data);
           if(data[0].userPassword==req.body.userPassword){
           res.send({message:'success',token:'20230438dsbjkdskdskbd cbvdm nk dkzc zxkcvzdhkvdjdfshj kdfhj '});

           }
           else{
           res.send({message:'fail'});
           }

       });
}

controller.signUpData=function(req,res){
  
  UserModel.create(req.body,function(err,data){
    console.log('data reached to signup');
  console.log(req.body);
          if(err) { console.log('server error in post'+err); }
          else{
           res.json({message:data});
          }
        });
}

exports = module.exports = controller;