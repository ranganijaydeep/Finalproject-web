const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String
});

module.exports = mongoose.model("Users", signupSchema)