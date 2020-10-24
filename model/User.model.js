const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email :  {
        type: String,
        required: true
    },
    password :  {
        type: String,
        required : true
    }

})

const usermodel = mongoose.model('User', UserSchema);
module.exports = usermodel;