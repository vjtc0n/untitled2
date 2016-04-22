
console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command('create', 'Create a new account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Account name ...',
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'u',
                description: 'Account username or email',
                type: 'string'
            },
            password: {
                demand :true,
                alias: 'p',
                description: 'Account passwd',
                type: 'string'
            }
        }).help('help');
    })
    .command('get', 'Get an existing account', function (yargs) {
        yargs.options({
            name: {
                deman: true,
                alias: 'n',
                description: 'Account ...',
                type: 'string'
            }
        }).help('help');

    })
    .help('help')
    .argv;

var command = argv._[0];
// create
//      --name
//      --username
//      --passwd

//get
//      --name

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount (accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

// // createAccount({
// // 	name: 'Facebook',
// // 	username: 'someemail@gmail.com',
// // 	password: 'Password123!'
// // });
//
// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);

if (command === 'create'){

    // process.argv.forEach(function (val, index, array) {
    //     console.log(index + ': ' + val);
    // });
    //console.log(process.argv[4]);
    var createdAccount = createAccount({
       name: process.argv[4],
       username: process.argv[6],
       password: process.argv[8]
    });

    console.log('Account created: ');
    console.log(createdAccount);
}else if (command === 'get'){
    var fetchedAccount = getAccount(process.argv[4]);

    if (typeof fetchedAccount === 'undefined'){
        console.log('Account not found');
    } else {
        console.log('Account found');
        console.log(fetchedAccount);
    }

}