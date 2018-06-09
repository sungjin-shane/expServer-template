const server = require('./server')
const port = 3000 || process.env.PORT

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})
