const express = require('express');
const app = require('../app');
const Router = express.Router();
const Functions = require('./Functions/primary');
const {check} = require('express-validator');

//@ All get routes
Router.get('/', Functions.LandingPage );



//@ All post routes
errorcheck = [
    check('firstname', "First name is required").not().isEmpty(),
    check('lastname', "Last name is required").not().isEmpty(),   
    check('email' , "email is required ").isEmail(),
    check('password', "must be greater than 6").isLength({min: 6})

]

Router.post('/register',  errorcheck, Functions.register);


module.exports = Router;