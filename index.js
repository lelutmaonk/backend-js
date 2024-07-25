const express = require('express')
const bodyParser = require('body-parser')

const client = require('./connection')
const app = express()

app.listen(3100,()=>{
    console.log('server running in port:3100')
})

app.use(bodyParser.json())

client.connect(err => {
    if(err){
        console.log(err.message)
    }else{
        console.log("connect")
    }
})

app.get('/books', (req, res) => {
    client.query(`select * from books`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
    })
})
