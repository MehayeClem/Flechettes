const inquirer = require("inquirer");

class Player {
    constructor(name ){
        this.name = name
        this.winner = false
        this.objectifTDM = 1
    }

    shot(){
        resultShot
        inquirer.prompt([
            {
                name:'result',
                message:'Entrez le score de votre tire : ',
            }
        ])
        .then(answers => {
            console.info('Le score de votre tire est donc de : ' , answers.result);
            resultShot = answers.result
        })
        return resultShot
    }
}

module.exports = Player