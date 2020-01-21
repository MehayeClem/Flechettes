class Play301 {
    
    constructor(){

    }

    playerTurn(player){
        for(let i=0 ; i<3 ; i++){
            let shot =  player.shot()
            let multiplicateur = 0
            let total = 0
            let diff = 0
            if(shot == 25 || shot == 50){
                total = shot
                diff = player.objectif301 - total
            }else{
                 total = shot*multiplicateur
                 diff = player.objectif301 - total
                 multiplicateur =  player.multiplicateur()+1
            }

            if( diff < 0){
                console.log('Votre coup dépasse 0 vous recommencé juste avant')
            }else if (diff == 0){
                if(multiplicateur == 2){
                    console.log('Bravo vous avez gagné')
                player.winner = true
                }
            }else {
                player.objectif301 = player.objectif301 - total
                console.log('Bien ! Il te reste '+player.objectif301+' !')
            }
            }
        }
}

module.exports = Play301;
