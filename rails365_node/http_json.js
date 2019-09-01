var http = require('http')

var onRequest = function(request, response) {
  console.log('request received')
  response.writeHead(200, { 'Content-Type': 'application/json' })
  // response.write('hello from out application')
  var myObj = {
    name: 'http2012',
    job: 'programer',
    afe: 27
  }
  response.end(JSON.stringify(myObj))
}

var server = http.createServer(onRequest)

server.listen(3000, '127.0.0.1')
console.log('server started on localhost port 3000')