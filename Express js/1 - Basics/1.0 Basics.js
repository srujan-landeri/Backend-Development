const express = require('express');
const app = express();

// adding HomePage
app.get('/',(req, res)=>{
    res.status(200).send('HomePage')
})

// adding AboutPage
app.get('/about',(req,res) => {
    res.status(200).send('About Page')
})

// rest all paths
app.all('*',(req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})
// adding a listening port
app.listen(5000,()=>{
    console.log('Listining port: 5000')
})

