// function doWork(data, callback) {
//     callback('done');
//     callback(' sone second');
//
// }
//
// function doWorkPromise(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             //resolve('everything worked');
//             reject('everything is broken');
//         }, 1000);
//         // reject({
//         //     error: 'sonething bad happened'
//         // });
//     });
//
// }
//
//
// doWorkPromise('some data').then(function (data) {
//    console.log(data);
//
// }, function (error) {
//     console.log(error);
// });
var request = require('request');

function getWeather(location) {
    //return promise
    return new Promise(function (resolve, reject) {
        var  encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&units=imperial&appid=6d282596470bead2cc4c180e9c959f86';

        encodeURIComponent(location);
        if  (!location){
            return reject('No location ');
        }

        request({
            url: url,
            json: true
        }, function (error, reponse, body) {
            if (error){
                reject('Unable to fetch weather.');
            } else {
                //console.log(JSON.stringify(body, null, 6));
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');

            }

        });

    });

}

getWeather('new york').then(function (currentWeather) {
    console.log(currentWeather);

}, function (error) {
    console.log(error);

});

