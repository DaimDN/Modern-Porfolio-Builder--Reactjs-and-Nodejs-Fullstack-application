const express = require('express');
const app = require('../app');
const Router = express.Router();
const Functions = require('./Functions/primary');
const {check} = require('express-validator');
const util = require('./util/auth');
const auth = require('./Functions/authentications')
const jobs = require('./Functions/jobs');

var registercheck =  [
    check('firstname', "First name is required").not().isEmpty(),
    check('lastname', "Last name is required").not().isEmpty(),   
    check('email' , "email is required ").isEmail(),
    check('password', "must be greater than 6").isLength({min: 6})

]
var Logincheck =  [ 
    check('email' , "email is required ").isEmail(),
    check('password', "must be greater than 6").isLength({min: 6})

]



//@ All get routes
Router.get('/users', util.auth,  auth.auth);
Router.get('/jobs', jobs.jobs );




//@ All post routes

Router.post('/register',  registercheck, Functions.register);
Router.post('/login',Logincheck,  Functions.authentication );


module.exports = Router;