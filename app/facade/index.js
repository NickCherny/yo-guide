'use strict'
class Facade {
  constructor () {
    this.subscribers = {}
    this.main = require('../controllers/mainCtrl')
    this.user = require('../controllers/userCtrl')
    this.cabinet = require('../controllers/cabinetCtrl')
    this.guides = require('../controllers/guidesCtrl')
    this.api = require('../controllers/api')
  }
  get DispatcherEvents () {
    return this._DispetcherEvents
  }
}
module.exports = new Facade()
