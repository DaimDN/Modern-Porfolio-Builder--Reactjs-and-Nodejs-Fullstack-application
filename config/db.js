const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
let mogouri = config.get('mongoURI');
const chalk = require('chalk');

module.exports.dbconnect = async()=>{
    try {

        let connection = await mongoose.connect(mogouri, {
            useCreateIndex: false,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(chalk.bgYellow("database connected successfully ........"))
        
    } catch (error) {
        console.log('error connecting database');        
    }
}