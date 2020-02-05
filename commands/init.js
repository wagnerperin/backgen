module.exports = () => {
    const argv = require('yargs').argv;
    const inquirer = require('inquirer');
    const questions = require('../core/questions');
    const handlebars = require('handlebars');
    const fs = require('fs');
    


    const command = argv._[0];

    switch(command){
        case 'init':
            inquirer.prompt(questions('initial')).then(answers => {
                let content = fs.readFileSync('./projeto_base/package.json', 'utf8');
                const template = handlebars.compile(content);
                console.log(answers.keywords);
                console.log(template(answers));

            })
            break;
    }
}