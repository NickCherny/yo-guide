'use strict'
class Facade {
  constructor () {
    this.account = require('../controllers/Account')
    this.about = require('../controllers/About')
    this.main = require('../controllers/mainCtrl')
    this.user = require('../controllers/userCtrl')
    this.cabinet = require('../controllers/Cabinet')
    this.guides = require('../controllers/guidesCtrl')
  }
  get DispatcherEvents () {
    return this._DispetcherEvents
  }
}
module.exports = new Facade()
