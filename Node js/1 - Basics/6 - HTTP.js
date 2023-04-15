const http = require('http')

// creating a server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page')
  } 
  else if (req.url === '/about') {
    res.write('Here is out short history')
  }
  else {
    res.end(`
      <html>
        <h1>OOPS!</h1>
        <p>Page Doesn't exist</p>
        <a href='/'>Back to Home</a>
      </html>
    `)
  }

  res.end()
})

// we have to mention the port number where
// out server will run

server.listen(5000, () => {
  console.log('Server listening on port 5000')
})