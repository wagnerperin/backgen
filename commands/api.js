module.exports = () => {
    const argv = require('yargs').argv;

    const command = argv._[0];

    switch(command){
        case 'api:create':
            console.log('Ola mundo 2');
            break;
    }
}