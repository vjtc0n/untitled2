// function doWork(shouldFail) {
//     return new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            //console.log('done!');
//             //resolve();
//            if (typeof shouldFail === 'boolean' && shouldFail === true ) {
//                reject('error msg');
//            } else {
//                resolve('success');
//            }
//        }, 1000);
//
//     });
// }
//
// doWork().then(function (message) {
//     console.log(message);
//     return doWork(true);
// }).then(function (message) {
//     console.log(message);
//     //console.log('all done');
// }).catch(function (error) {
//     console.log(error);
// });

function getLoaction() {
    //return promise
    // resolve('Hanoi')
    return new Promise(function (resolve, reject) {
        resolve('Hanoi');
    });
}

function getWeather(location) {
    // return promise
    // resolve (' It's 123 in Hanoi')
    return new Promise(function (resolve, reject) {
        resolve('It is 123 in ' + location + ' !');
    });
}

getLoaction().then(function (location) {
   return getWeather(location); 
}).then(function (currentWeather) {
    console.log(currentWeather);
    
});