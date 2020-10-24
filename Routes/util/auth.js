const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.auth = async(req, res, next)=>{
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg: 'No token found auth denied'});
    }
    try {
        jwt.verify(token, config.get('secret'), (error, decoded)=>{
            if(error){
                res.status(401).json({msg: "Token invalid"});
                console.log(error);
            }
            else{
                req.user = decoded.user;
                next();
            }
        })
        
    } catch (error) {
        console.error('Error occured with middleware');
        res.status(500).json({ msg: 'Server Error' });
        
    }
}