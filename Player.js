const readline = require('readline-sync')
class Player {
    constructor(name ){
        this.name = name
        this.winner = false
        this.objectifTDM = 1
        this.objectif301 = 301
    }

       shot(){
        return  readline.question('Entrez le score de votre tire '+this.name+': ')
    }
    multiplicateur(){
        multiplicateurs = ['x1' , 'x2' , 'x3']
        selectedMulti = readline.keyInSelect(multiplicateurs, 'Choisissez le multiplicateur');
        console.log('OK '+multiplicateurs[selectedMulti]+' est le multiplicateur choisi')
        return multiplicateurs[selectedMulti]
    }
}

module.exports = Player