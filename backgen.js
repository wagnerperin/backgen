#!/usr/bin/env node
const options = require('./core/options');
const {api, init} = require('./commands/index');

const argv = require('yargs')
    .help()
    .alias('help', 'h')
    .version()
    .alias('version', 'v')
    .usage('Usage: backgen <command>')
    .command('init', 'Initialize a new basic project', options('init'), init)
    .command('api:create', 'Create a new api', options('api:create'), api)
    .demandCommand(1, 'You need at least one command')
    .argv;

