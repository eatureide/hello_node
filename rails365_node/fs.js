var fs = require('fs')

var readMe = fs.readFile('readMe.txt', 'utf8', function (err, data) {
  console.log(data)
  fs.writeFile('writeMe.txt', data, function () {
    console.log('write file finish')
  })
})

console.log('finished')