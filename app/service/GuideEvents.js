const EventEmitter = require('events')
class GuideEvents extends EventEmitter{}

let GE = new GuideEvents()

module.exports = GE
