const mongoose = require('mongoose')
const schema = mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    gameWin : Number,
    gameLost : Number,
    createAt : Date
})

module.exports = mongoose.model('Player' , schema);