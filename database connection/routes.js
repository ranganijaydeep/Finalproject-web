const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');
const User = require("./models/crew");

var data = [];


//middle wear





//mongo connect 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    () =>
    console.log('connectd DB!')
);

module.exports = (app) => {

    //route set 
    app.get('/', (req, res) => {
        console.log()
        res.render('index')
    })

    app.get('/recipe', (req, res) => {
        res.render('recipe')
    })
    app.get('/signup', (req, res) => {
        res.render('signup')
    })


    app.post('/crewMembers', (req, res) => {
        const fill = new User({
            username: req.body.usrname,
            password: req.body.pswd
        })
        fill.save().then(fill => {
            console.log("saved");
        })
    })

}