var request = require('request');
//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Hanoi,uk&units=imperial&appid=6d282596470bead2cc4c180e9c959f86';



module.exports = function (location, callback) {
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



};