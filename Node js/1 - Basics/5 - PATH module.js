const path = require('path')
 
const filePath = path.join('/Grandpa/','parent','child.txt')

console.log(filePath)
console.log(path.basename(filePath))
console.log("Absolute Path: " + path.resolve(__dirname,'grandpa','parent','child.txt'))