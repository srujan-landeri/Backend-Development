const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(second)