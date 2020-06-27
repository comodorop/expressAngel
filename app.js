const express  = require('express')

const bodyParser = require('body-parser')
const app = express()
const tokenMidleware = require('./midleware/token')
const users = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(tokenMidleware.token)





app.use('/v1/users',users)


app.listen(4500, ()=>{
  console.log("El server its up")
})