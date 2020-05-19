const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');
const staff = require("./models/crew");
const customers = require("./models/login");
const Mrecipe = require('./models/recipes')

//mongo connect 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    () =>
    console.log('connectd DB!')
);

module.exports = (app) => {

    // impotritng routes
    const recipeRoute = require('./routes/recipe');

    app.use('/recipe', recipeRoute);


    //route set 
    app.get('/', (req, res) => {
        console.log()
        res.render('index')
    })


    //getting signup page 
    app.get('/signup', (req, res) => {
        res.render('signup') //rendering file 
    })
    app.get('/login', (req, res) => {
        res.render('login') //rendering file 
    })
    app.get('/latest_recipe', (req, res) => {
        res.render('recipe') //rendering file 
    })






    // getting sign up commands

    app.post('/crewMembers', (req, res) => {
            const fill = new staff({
                Firstname: req.body.f_irstname,
                Lastname: req.body.l_astname,
                Email: req.body.e_mail,
                Password: req.body.p_assword
            })
            fill.save().then(fill => {
                console.log(" sign up saved");
            })
        })
        // geeting login from user 
    app.post('/users', (req, res) => {
        const fill = new customers({
            Email: req.body.email,
            Password: req.body.password
        })
        fill.save().then(fill => {
            console.log(" login user saved");
            res.send('user saved')
        })
    })

}