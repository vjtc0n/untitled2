// var cryptoabc = require('crypto-js');
//
//
// var secretMessage = 'ABCDEFGHIKLM';
// var secretKey = '123456';
//
// var encryptedMessage = cryptoabc.AES.encrypt(secretMessage, secretKey);
//
// console.log('Encrypted M      ' + encryptedMessage);
//
// // Decrypt
//
// var bytes = cryptoabc.AES.decrypt(encryptedMessage, secretKey);
// var decryptedMessage = bytes.toString(cryptoabc.enc.utf8);
//
// console.log('Decrypted M      ' + decryptedMessage);
//
//
var crypto = require('crypto');

function encrypt(key, data) {
    var cipher = crypto.createCipher('aes256', key);
    var crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
}

function decrypt(key, data) {
    var decipher = crypto.createDecipher('aes256', key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}

var key = new Buffer('85CE6CCF67FBBAA8BB13479C3A6E084D', 'hex');

var message = encrypt(key, 'ABCDEFGHIKLM');
console.log(message.toString());
var result = decrypt(key, message).toString();
console.log(result);