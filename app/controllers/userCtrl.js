'use strict'
const UserModels = require('../models/User')
const GE = require('../service/GuideEvents')
class UserCtrl {
  /**
  *
  * @param {Object} req - Express HTTP Request
  * @param {Object} res - Express HTPP Response
  * @param {Object} next - Express function
  */
  static getUserProfile (req, res, next) {
    console.log(req.params.id)
    res.redirect('/cabinet')
  }
}
module.exports = UserCtrl
