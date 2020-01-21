const Play301 = require('./gamemodes/301')
const TourDuMonde = require('./gamemodes/TourDuMonde')
const Cricket = require('./gamemodes/Cricket')

class GameMode {
    constructor(){

    }
    game(players , gamemode){
        while(this.isGameOver() === true){
            for(let player of players){
                switch(gamemode) {
                    case 'Le tour du monde' : 
                    let TDM = new TourDuMonde
                    TDM.playerTurn(player)
                    case 'Le 301' :
                        let p301 = new Play301
                        p301.playerTurn(player)
                    case 'Le cricket' :
                }
            }
        }
    }

    isGameOver(){
        return true
    }
}

module.exports = GameMode;