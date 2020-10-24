const usermodel = require('../../model/User.model');


module.exports.auth = async(req, res, next)=>{

    try {
        console.log(req.body);
        const user = await usermodel.findById(req.user.id).select('-password');
        res.json(user);
        
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"});
        
    }
}