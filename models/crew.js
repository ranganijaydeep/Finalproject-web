const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String

});

module.exports = mongoose.model("crewMembers", usersSchema)