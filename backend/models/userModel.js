const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    city: String,
    zipcode: String,
    website: String

}, {
    timestramp: new Date().toLocaleDateString()
})

module.exports = mongoose.model('User', UserSchema)