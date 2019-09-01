var http = require('http')
var fs = require('fs')

var onRequest = function (request, response) {
  console.log('request received')
  response.writeHead(200, { 'Content-Type': 'text/html' })
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  myReadStream.pipe(response)
}

var server = http.createServer(onRequest)

server.listen(3000, '127.0.0.1')
console.log('server started on localhost port 3000')