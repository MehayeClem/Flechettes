const readline = require('readline-sync')
class Player {
    constructor(name ){
        this.name = name
        this.winner = false
        this.objectifTDM = 1
        this.objectif301 = 301
    }

    shot(){
        let resultshot = readline.question('Entrez le score de votre tire '+this.name+': ')
        if (resultshot <= 20 || resultshot == 50 || resultshot == 25 ){
            return resultshot
        }else {
            while(resultshot > 20 || resultshot == null || resultshot == 0 ){
                resultshot = readline.question('Votre score ne peut pas dépasser 20 ! Réentrez le score de votre tire '+this.name+': ')
            }
            return resultshot
        } 
    }
    multiplicateur(){
        let multiplicateurs= ['x1' , 'x2' , 'x3']
        let selectedMulti = readline.keyInSelect(multiplicateurs, 'Choisissez le multiplicateur')
        console.log('OK '+multiplicateurs[selectedMulti]+' est le multiplicateur choisi')
        return selectedMulti
    }
}

module.exports = Player