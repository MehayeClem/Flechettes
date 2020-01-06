async function resultShot(){
    let ResultShot
    await inquirer.prompt([
        {
            name: 'resultOfTheShot',
            message: 'Entrez le resultat du tire',
        }
    ])
    .then(answers => {
        console.info('Le resultat de votre tire est : ',answers.resultOfTheShot);
        ResultShot = answers.resultOfTheShot
    });
    return ResultShot
}