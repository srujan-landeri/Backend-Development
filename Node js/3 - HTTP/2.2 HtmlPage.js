const http = require('http')
const {readFileSync} = require('fs')

const HomePage = readFileSync(__dirname + '/2.0 index.html')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'})

    if(req.url === '/'){
        res.write(HomePage)
    }

    res.end()
})

server.listen(5000,()=>{
    console.log("Listening port: 5000")
})
