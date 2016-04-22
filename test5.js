/**
 * Created by vjtc0n on 4/17/16.
 */

var person = {
    name: 'Khanh',
    age: 24
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge area');
var  animal = '{"name": "ABC"}';

// convert to JS object

var  animalObject = JSON.parse(animal);

// add age prop

animalObject.age = 1;

// convert back to json

animal = JSON.stringify(animalObject);

// log out

console.log(animal);