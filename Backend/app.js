'use strict'

const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const database = require('./modules/database')
const firebase = require('firebase')
const config = require('./modules/config')


firebase.initializeApp(config.firebaseConfig);


const app = express()


app.use(bearerToken())
app.use(cors())
app.use(express.json())

//rutas

const routeProducts = require('./routes/products')



app.use(routeProducts)




database.connect()


module.exports = app
