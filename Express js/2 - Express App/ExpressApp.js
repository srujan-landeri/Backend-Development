const express = require('express');
const app = express();

// adding external HTML
app.get('/',(req, res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

// adding external style.css
app.get('/style.css',(req,res)=>{
    res.status(200).sendFile(__dirname+'/style.css')
})
// rest all paths
app.all('*',(req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})
// adding a listening port
app.listen(5000,()=>{
    console.log('Listining port: 5000')
})

