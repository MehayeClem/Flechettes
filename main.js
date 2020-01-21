const readline = require('readline-sync')
const Player = require("./models/Player")
const GameMode = require("./src/gamemode")

 function nbrPlayers(){
   let nPlayers = readline.question('Entrez le nombre de joueurs : ')
    return nPlayers
}

 function gameMode(){
    jeux = ['Le tour du monde' , 'Le 301' , 'Le cricket']
    selectedGamemode = readline.keyInSelect(jeux, 'Choisissez le mode de jeu');
    console.log('OK '+jeux[selectedGamemode]+' est le mode de jeu choisi')
    return jeux[selectedGamemode]
}

function givePlayerName(i){
    let namePlayer = readline.question('Entrez le nom du joueurs ' + (i+1) +' ')
    return namePlayer
}


 async function initialize(){
    let namePlayers = []
    let players = []
    let nPlayers = await nbrPlayers()
    for (let i = 0 ; i < nPlayers ; i++){
        namePlayers = await givePlayerName(i)
        players.push(new Player (namePlayers))
    }
    let jeux =  gameMode()
    let Game = new GameMode
    Game.game(players , jeux)
    return players
}

let playersTab = initialize()


module.exports = playersTab