const errors = "500 Internal Server error"
const userModel = require('../../model/User.model');
const {
	check,
	validationResult
} = require('express-validator');
const bcrypt = require('bcrypt');
const usermodel = require('../../model/User.model');
const jwt = require('jsonwebtoken');
const saltround = 10;
const config = require('config');


module.exports.LandingPage = async (req, res, next) => {
	try {
		res.status(200).json({
			data: "working"
		});
	} catch (error) {
		res.status(500).json({
			error: errors
		});
	}
}
module.exports.register = async (req, res, next) => {
	const err = validationResult(req);
	if (!err.isEmpty()) {
		return res.status(400).json({
			errors: err.array()
		});
	}
	const {
		firstname,
		lastname,
		email,
		password
	} = req.body;
	try {
		const user = await usermodel.findOne({
			email
		});
		if (user) {
			return res.status(400).json({
				errors: [{
					msg: 'User already exists'
				}]
			});
		} else {
			var data = {
				firstname,
				lastname,
				email,
				password
			};
			const Salt = await bcrypt.genSalt(saltround);
			data.password = await bcrypt.hash(data.password, Salt);
			const newdata = new userModel(data);
			newdata.save();
			const payload = {
				user: {
					id: data.id
				}
			};
        
            jwt.sign(
                payload,
                config.get('secret'),
                { expiresIn: '5 days' },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );
        }
	} catch (error) {
		res.status(500).json({
			error: errors
		});
		console.log(errors);
	}
}

module.exports.authentication = async(req, res, next)=>{
    const newcheck = validationResult(req);
    if(!newcheck.isEmpty()){
        res.status(400).json({msg: newcheck.array()})
    }
    try {
      
        var {email, password} = req.body;
       let user = await usermodel.findOne({email});
        if(!user){
            res.status(200).json({msg: "User doesnt exist"});
        }
        else{
            
            let match = await bcrypt.compare(password, user.password);

            if(match){

                
            const payload = {
                user: {
                id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('secret'),
                { expiresIn: '5 days' },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );


            }
            else{
                res.json({msg: "Password not matched"});
            }
        }
        
        
    } catch (error) {
        res.status(200).json({msg: errors})
        console.log(errors)
        
    }
}