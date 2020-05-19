const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const Mrecipe = require('../models/recipes');



router.get('/', async(req, res) => {
    try {
        const rcps = await Mrecipe.find();
        res.json(rcps);
    } catch (error) {
        res.json({ message: error });
    }

})

// searching recipe according to user enter 
router.get('/:recipeId', async(req, res) => {

    try {

        const findme = await Mrecipe.find({ cuisine: req.params.recipeId });
        res.writableObjectMode()
    } catch (error) {
        res.json({ message: error });
    }
})


// getting recipe 
router.post('/recipes', (req, res) => {
    const fill = new recipe({
        title: req.body.title,
        cuisine: req.body.cuisine,
        category: req.body.category,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
    fill.save().then(fill => {
        console.log(" recipe saved");
    })
})

module.exports = router;