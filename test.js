/**
 * Created by vjtc0n on 4/14/16.
 */
console.log("Hello");

var storage = require('node-persist');
storage.initSync();
//storage.setItemSync('name', 'Khanh');
var name = storage.getItemSync('name');
console.log('Save name is : '+ name);