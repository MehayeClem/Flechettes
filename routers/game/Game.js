const mongoose = require('mongoose')
const schema = mongoose.Schema({
    id : Number,
    mode : ["around-the-world","301","cricket"],
    name : String,
    currentPlayerId : Number,
    status : ["draft" , "started" , "ended"],
    createAt : Date
})

module.exports = mongoose.model('Game' , schema);