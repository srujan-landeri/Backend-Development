// Modules are the Encapsulated Code
// Every file is a module by default

// importing names.js

const {names} = require('./3.0 - Names')
const utils = require('./3.1 - utils')

// logging out values of the two modules
console.log(names);
console.log(utils);
console.log();

for( let i in names){
    utils.sayHI(names[i])
    utils.saySchool('Andrews School')
    console.log();
}