const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receipeSchema = Schema({
    title: String,
    cuisine: String,
    vegetarian: Boolean,
    ingredients: Array,
    instructions: String,
    URL: String

})
module.exports = mongoose.model("receipes", receipeSchema)