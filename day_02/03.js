var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname
  if (pathname.indexOf('.') == -1) {
    pathname += 'index.html'
  }
  var pathUrl = './' + path.normalize('./static/' + pathname)
  var extname = path.extname(pathname)

  fs.readFile(pathUrl, function (err, data) {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
      res.end('404')
    }
    getMime(extname, function (mime) {
      res.writeHead(200, {
        'Content-Type': mime
      })
      res.end(data)
    })

  })

})

function getMime(extname, callback) {
  fs.readFile('./mime.json', function (err, data) {
    if (err) {
      throw Error('没找到文件')
    }
    var mimeJson = JSON.parse(data)
    callback(mimeJson[extname])
  })
}

server.listen(3000, '127.0.0.1')