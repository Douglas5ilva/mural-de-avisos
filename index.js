const express = require('express')
const PORT = 3000
const app = express() 
const p = require("path")
const cad = require('./routes/cad')

app.use('/cad',cad)
app.use(express.static(p.join(__dirname, 'public')))


app.listen(PORT, ()=>{
    console.log('server Running on Port:',PORT)
})