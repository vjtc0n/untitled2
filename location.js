/**
 * Created by vjtc0n on 4/22/16.
 */
var request = require('request');
var url = 'http://ipinfo.io';



module.exports = function (callback) {
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true,
        }, function (error, response, body) {
            if (error){
                reject();
            } else {
                resolve(body);
            }
        });
    });


};