 class TourDuMonde {
    
    constructor(){

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
