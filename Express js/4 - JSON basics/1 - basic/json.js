const express = require('express')
const app = express()
const {products} = require('../data')

app.get('/', (req,res) => {
    res.send(`<h1>Hello World</h1><a href='/api/products'>data</a>`)
})

// The Products array is sent to the localhost and can be accessed when required
// This is how data is sent as json

app.get('/api/products',(req,res) => {
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {
            id,name,image
        }
    })
    res.json(newProducts)
})



app.listen(5000, () => {
    console.log('listening at port 5000')
})