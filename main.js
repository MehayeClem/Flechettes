const inquirer = require("inquirer");
const Player = require("./Player")

async function nbrPlayers(){
   let nPlayers
    await inquirer.prompt([
        {
            name:'NbrPlayers',
            message: 'Entrez le nombre de joueurs',
        },
    ])
    .then(answers => {
        console.info('Nombre de joueurs : ',answers.NbrPlayers);
         nPlayers = answers.NbrPlayers
    })
    return nPlayers
}

async function gameMode(){
    await inquirer.prompt([
        {
            type:'rawlist',
            name: 'gamemode',
            message: 'Choisissez le mode de jeu',
            choices: ['Le tour du monde' , 'Le 301' , 'Le cricket']
        }
    ])
    .then(answers => {
        console.info('Votre choix est : ',answers.gamemode);
    });
}

async function givePlayerName(i){
    let namePlayer
   await  inquirer.prompt([
        {
            name:'namePlayer',
            message: 'Entrez le nom du joueurs ' + (i+1) ,
        },
    ])
    .then(answers => {
        console.info('Le joueur' , answers.namePlayer + ' est ajouté') 
        namePlayer = answers.namePlayer
    })
    return namePlayer
}


async function play(){
    let namePlayers = []
    let players = []
    let nPlayers = await nbrPlayers()
    for (let i = 0 ; i < nPlayers ; i++){
        namePlayers += await givePlayerName(i)
        players.push(new Player (namePlayers[i]))
    }
    await gameMode()
    return players
}

let playersTab = play()

module.exports = playersTab