/**
 * Created by vjtc0n on 4/17/16.
 */

var argv = require('yargs')
    .command('hello', 'Greets the user', function (yargs) {
        yargs.options({
            'name': {
                demand: true,
                alias: 'n',
                describe: 'Your first name goes here',
                type: 'string'
            },
            'lastname': {
                demand: true,
                alias: 'l',
                describe: 'Your last name goes here',
                type: 'string'
            }
        }).help('help');
    })
    .command('get', 'some description', function (yargs) {
        
    })
    .help('help')
    .argv;
var command = argv._[0];

console.log(argv.name);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
    console.log('Hello world!');
}
