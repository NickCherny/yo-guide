'use strict';
class Facade {
  constructor () {
    this.admin = require('../controllers/Admin');
    this.account = require('../controllers/Account');
    this.about = require('../controllers/About');
    this.main = require('../controllers/mainCtrl');
    this.user = require('../controllers/User');
    this.cabinet = require('../controllers/Cabinet');
    this.guides = require('../controllers/Guides');
  }
}
module.exports = new Facade();
