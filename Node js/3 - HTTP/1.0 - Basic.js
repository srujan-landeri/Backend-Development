const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'})

    if(req.url === '/'){
        res.write(
            `
                <html>
                    <h1>Welcome to the HomePage</h1>
                </html>
            `
        )
    }

    else if(req.url === '/about'){
        res.write(
            `
                <html>
                    <h1>A short story</h1>
                </html>
            `
        )
    }

    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(
            `
                <html>
                    <h1>404 PAGE NOT FOUND</h1>
                </html>
            `
        )
    }

    res.end()
})

server.listen(5000,()=>{
    console.log("Listening port: 5000")
})
