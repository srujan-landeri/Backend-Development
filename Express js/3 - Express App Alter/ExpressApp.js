const express = require('express');
const app = express();

// adding the public files [static files]
app.use(express.static(__dirname+'/public'))


// rest all paths
app.all('*',(req,res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
})

// adding a listening port
app.listen(5000,()=>{
    console.log('Listining port: 5000')
})

