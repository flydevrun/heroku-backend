const dotenv = require('dotenv').config()
const { users } = require('./seedsHelpers')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`MongoDB connected ${mongoose.connection.host}`))
.catch(err => console.log(err))
 
const UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    city: String,
    zipcode: String,
    website: String
})

const User = mongoose.model('User', UserSchema)

const seedsDB = async () => {
    await User.deleteMany({})

    for(let i = 0; i < users.length; i++) {
        const usersEl = new User({
            name: `${users[i].name}`,
            username: `${users[i].username}`,
            email: `${users[i].email}`,
            city: `${users[i].city}`,
            zipcode: `${users[i].zipcode}`,
            website: `${users[i].website}`
        })
        const res = await usersEl.save()
        console.log(res)
    }

}
seedsDB()
    