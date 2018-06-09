const express = require('express')
const hbs = require('express-handlebars')
const defaultrouter = require('./routes/defaultroute.js')
// const getrouter = require('./routes/getroute.js')
// const postrouter = require('./routes/postroute.js')

const server = express()
// register template engine
server.engine('hbs', hbs({
  defaultlayout: 'main', // in the views/layouts directory
  extname: 'hbs' // .hbs
}))

server.set('view engine', 'hbs') // server.engine is default view engine
server.use(express.static('public')) // set default htdoc directory
// It parses incoming requests with urlencoded payloads and is based on body-parser.
server.use(express.urlencoded({extended: false}))

server.use('/', defaultrouter)
// server.use('/', getrouter)
// server.use('/', postrouter)

module.exports = server
