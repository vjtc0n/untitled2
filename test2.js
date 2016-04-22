/**
 * Created by vjtc0n on 4/14/16.
 */
var storage = require('node-persist');
storage.initSync();
var name = storage.getItemSync('name');
console.log('Save name is : '+ name);