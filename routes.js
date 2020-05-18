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


    app.get('/recipe', async(req, res) => {
            try {
                const rcps = await Mrecipe.find();
                res.json(rcps);



            } catch (error) {
                res.json({ message: error });
            }

        })
        // searching recipe according to user enter 
    app.get('/:postId', async(req, res) => {

        try {
            const findme = await Mrecipe.findById(req.params.postid);
            res.json(findme);
        } catch (error) {
            res.json({ message: error });
        }
    })


    // getting recipe 
    app.post('/recipes', (req, res) => {
        const fill = new recipe({
            title: req.body.title,
            country: req.body.country,
            category: req.body.category,
            instructions: req.body.instructions
        })
        fill.save().then(fill => {
            console.log(" recipe saved");
        })
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
            Email: req.body.e_mail,
            Password: req.body.p_assword
        })
        fill.save().then(fill => {
            console.log(" login user saved");
            res.send('user saved')
        })
    })

}