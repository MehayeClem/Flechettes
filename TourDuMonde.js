 class TourDuMonde {
    
    constructor(){

    }
      game(players){
        while (true){
            for(let player of players){
                if (player.winner === false){
                  this.playerTurn(player)
                } else {
                    console.log('Bravo le joueur'+player.name+' remporte la partie')
                    break
                }
            }
        }
    }

    playerTurn(player){
       
        for(let i=0 ; i<3 ; i++){
     let shot =  player.shot()
            if(shot == player.objectifTDM){
                console.log('Bravo vous passer a la prochaine zone')
                player.objectifTDM += 1
                if(player.objectifTDM == 21){
                    console.log('Bravo  le joueur '+player.name+' vient de finir')
                    player.winner = true
                }
            }else{
                console.log('dommage il faut recommencer')
            }
        }
    }
}

module.exports = TourDuMonde;
