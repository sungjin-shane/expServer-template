// const express = require('express')
// const hbs = require('express-handlebars')
// const defaultrouter = require('./routes/defaultroute.js')

// const server = express()
// // register template engine
// server.engine('hbs', hbs({
//   defaultlayout: 'main',
//   extname: 'hbs' // .hbs
// }))

// server.set('view engine', 'hbs')
// server.use(express.static('public'))
// server.use(express.urlencoded({extended: false}))

// server.use('/', defaultrouter)

// module.exports = server

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: true}))

// Routes
server.use('/', routes)

module.exports = server
