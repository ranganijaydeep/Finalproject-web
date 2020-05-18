const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = Schema({
    Email: { type: String, require: true },
    Password: { type: String, require: true }
});

module.exports = mongoose.model("users", loginSchema);