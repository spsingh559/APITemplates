const router = require('express').Router();


const userController = require('./Login.controller.js');
router.post('/login',userController.loginData);
router.post('/register',userController.signUpData);


exports = module.exports = router;
