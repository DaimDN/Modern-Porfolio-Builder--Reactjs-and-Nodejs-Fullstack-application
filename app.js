const express = require('express');
const app = express();
const db = require('./config/db');
db.dbconnect();

const errormessage = "Not found";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/', require('./Routes/Routing'));

app.use(function(req, res, next){
    res.status(404);
    if(req.accepts('json')){
        res.json(errormessage);
    }
    if(req.accepts('html')){
        res.render('error');
    }
    if(req.accepts('text')){
        res.send(errormessage);
    }
})




module.exports = app;