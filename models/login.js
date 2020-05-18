const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = Schema({
    Email: String,
    Password: String
});

module.exports = mongoose.model("users", loginSchema)