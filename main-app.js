
var weather = require('./weather');
var location = require('./location');


// setup yargs to have a --location or -l arguments
var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: "Location to fetch weather",
        type: 'string'
    })
    .help('help')
    .argv;



if (typeof argv.l === "string" && argv.l.length > 0){
    console.log('has location');
    // weather(argv.l, function (currentWeather) {
    //
    //     console.log(currentWeather);
    //})

    // weather(location) : lay weather tai location
    weather(argv.l).then(function (currentWeather) {
        console.log(currentWeather);
    }).catch(function (error) {
        console.log(error);
    });
} else {
    console.log('No location');
    // location((function (location) {
    //     if  (location){
    //        weather(location.city, function (currentWeather) {
    //           console.log(currentWeather);
    //
    //        });
    //     }else {
    //         console.log('Unable to locate')
    //     }
    //
    // }));

    // location() : lay location tại ipinfo.io -> location của curent computer
    location().then(function (loc) {
        console.log(loc.city);
        return weather(loc.city);
    }).then(function (currentWeather) {
        console.log(currentWeather);
    }).catch(function (error) {
        console.log(error);
    });
}