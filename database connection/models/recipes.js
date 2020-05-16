const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receipeSchema = Schema({
    title: { type: String, required: true },
    cuisine: { type: String, required: true },
    category: { type: String },
    instructions: { type: String },
    URL: { type: String }

})
module.exports = mongoose.model("Recipes", receipeSchema)