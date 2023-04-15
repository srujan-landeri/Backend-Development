const http = require('http')
const {readFileSync} = require('fs')

const HomePage = readFileSync(__dirname + '/2.0 index.html')
const HomeStyle = readFileSync(__dirname + '/style.css')

const server = http.createServer((req,res) => {
    
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(HomePage)
    }

    if(req.url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(HomeStyle)
    }

    res.end()
})

server.listen(5000,()=>{
    console.log("Listening port: 5000")
})
