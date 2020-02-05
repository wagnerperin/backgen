let options = {
    init:{
        directory: {
            alias: ['dir', 'd'],
            default: '.',
            describe: 'Directory name',
            demand: false
        }
    },
    'api:create':{
        name:{
            alias:['n'],
            describe: 'API name',
            demand: true
        },
        attributes:{
            alias:['a'],
            describe: 'Object attributes',
            demand: true
        }
    }
}

module.exports = (op) => {
    return options[op];
}