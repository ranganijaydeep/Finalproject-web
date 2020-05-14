const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = Schema({
    username: String,
    password: String

});

module.exports = mongoose.model("crewMembers", usersSchema)