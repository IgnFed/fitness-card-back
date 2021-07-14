require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./routes/routes.routes')
const app = express()
//CONFIGS
const port = 9000
app.set('port', process.env.port || port)

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(route)

//LISTENING
app.listen(app.get('port'), ()=>{
   console.log(`Listening on http://localhost:${process.env.port || port}`)
})