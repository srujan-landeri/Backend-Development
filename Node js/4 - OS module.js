const os = require('os')

console.log(os.userInfo(),'\n')
console.log(`The System uptime: ${os.uptime()}`)
console.log(`OS Type: ${os.type()}`)
console.log(`OS Release: ${os.release()}`)