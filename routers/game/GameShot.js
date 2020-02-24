const mongoose = require('mongoose')
const schema = mongoose.Schema({
    id : Number,
    gameId : Number,
    playerId : Number,
    multiplicator : Number,
    sector: Number,
    createAt : Date
})

module.exports = mongoose.model('GameShot' , schema);