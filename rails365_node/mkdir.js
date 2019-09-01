var fs = require('fs')

fs.unlink('writeMe.txt', function () {
  console.log('delete write.txt file')
})

// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')
fs.mkdir('stuff', function () {
  fs.readFile('readMe.txt','utf8', function(err,data) {
    fs.writeFile('./stuff/writeMe.txt', data, function () {
      console.log('copy successfully')
    })
  })
})