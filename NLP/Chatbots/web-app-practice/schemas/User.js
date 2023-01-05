//setting up the schema for the user, that will standerize the data that is being stored in the database

//User.js

//import mongoose
const mongoose = require('mongoose')

//create a schema
let UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//export the schema
module.exports = mongoose.model('User', UserSchema)

