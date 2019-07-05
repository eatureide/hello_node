var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html;charset=UTF8'
    })
    res.end('成功！')
  }else{
    res.writeHead(404, {
      'Content-type': 'text/html;charset=UTF8'
    })
    res.end('失败')
  }

})

server.listen(80, '127.0.0.1')