const EventEmitter = require('events').EventEmitter;

class Abserver extends EventEmitter{
  say(){
    this.emit('done', {data: 'тут какие либо данные'})
  }
}
module.exports = Abserver;
