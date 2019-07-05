var http = require('http')

var server = http.createServer(function (req, res) {
  res.writeHead(200,{
    'Content-type': 'text/html;charset=UTF8'
  })
  res.write('<p>11</p>')
  res.end('success')
})

server.listen(80, '127.0.0.1')