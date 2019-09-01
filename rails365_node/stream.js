var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.pipe(myWriteStream)

// var writeData = 'hello world'
// myWriteStream.write(writeData, 'utf8')
// // myWriteStream.end()
// myWriteStream.on('finish', function() {
//   console.log('finished')
// })

// myReadStream.on('data', function(chunk) {
//   console.log('new chunk received')
//   console.log(chunk)
// })
// var data = ''
// myReadStream.on('data', function(chunk) {
//   // data += chunk
//   myWriteStream.write(chunk)
// })

// myReadStream.on('end', function() {
//   console.log(data)
// })

