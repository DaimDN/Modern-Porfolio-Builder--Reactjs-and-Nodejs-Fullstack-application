const errors = "500 Internal Server error"
const userModel = require('../../model/User.model');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const usermodel = require('../../model/User.model');

const saltround = bcrypt.genSalt(10);

module.exports.LandingPage = async(req, res, next)=>{
    try {
        res.status(200).json({data: "working"});
        
    } catch (error) {
        res.status(500).json({error: errors});
        
    }
}



module.exports.register = async(req, res, next)=>{
  
    
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ errors: err.array() });
        }
        const {firstname, lastname, email, password} = req.body;

        try {

        let user = await userModel.find({email});
        console.log(user);

        if(user){
           return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        else{

         const data = {firstname, lastname, email, password};
       
        
        const salt = await bcrypt.genSalt(saltround);
        data.password = await bcrypt.hash(data.password, salt);       
       
        const newuser = new usermodel(data);
        res.status(200).json(useruser);        
        }
    } catch (error) {
        res.status(500).json({error: errors});
        console.log(errors);
        
    }
}