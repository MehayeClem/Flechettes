const body = require('body-parser')
const express = require ('express')
let app = express()
app.use(body())
let port = 8080
const mongoose = require('mongoose')
const Game = require('./game/Game')
const Player = require('./game/Player')
const GamePlayer = require('./game/GamePlayer')
const GameShot = require('./game/GameShot')

mongoose.connect('mongodb://localhost:27017/Dart', {useNewUrlParser: true})

app.listen(port, () => {
    console.log('Server is running')
})

app.post('/player' , async(req, res) => {
    const id = req.body.id
    const name = req.body.name
    
    if(!id || !name){
        res.send('Il manque un argument')
    }

    const newPlayer = new Player({
        id : id,
        name : name
    })

    await newPlayer.save()
    res.json(newPlayer)
    return
})

app.get('/player' , async (req, res) => {
    const players = await Player.find()
    await res.json(players)
})

app.get('/player/:id' , async (req, res) => {
    const id = req.params.id
    const player = await Player.findOne({id : id})
    res.json(player)
})

app.delete('/player/:id' , async(req , res) => {
    const id = req.params.id
    const suppr = await Player.deleteOne({id : id})
    res.json(suppr)
})

app.patch('/player/:id' , async(req, res) => {
    const id = req.params.id
    const player = await Player.findOne({id : id})

    const name = req.body.name

    if(name){
        player.name = name
    }

    await player.save()

    res.json()
})