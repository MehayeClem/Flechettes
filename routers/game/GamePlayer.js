const mongoose = require('mongoose')
const schema = mongoose.Schema({
    id : Number,
    playerId : Number,
    gameId : Number,
    remainingShot: Number,
    score : Number,
    rank : Number,
    order : Number
})

module.exports = mongoose.model('GamePlayer' , schema);