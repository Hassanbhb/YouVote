const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', User);