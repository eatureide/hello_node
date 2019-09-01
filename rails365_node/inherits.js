const events = require('events')
const util = require('util')

const Person = function (name) {
  this.name = name
}

util.inherits(Person, events.EventEmitter)

const jack = new Person('jack')
const lucy = new Person('lucy')

const emitArray = [jack, lucy]

emitArray.forEach((item) => {
  item.on('speak', (message) => {
    console.log(`${item.name} said ${message}`)
  })
})

jack.emit('speak', 'hello')
lucy.emit('speak', 'hi')