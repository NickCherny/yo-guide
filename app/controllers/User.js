'use strict';
const UserModels = require('../models/User');
const GE = require('../service/GuideEvents');
class UserCtrl {
  /**
  *
  * @param {Object} req - Express HTTP Request
  * @param {Object} res - Express HTPP Response
  * @param {Object} next - Express function
  */
  static getUserProfile (req, res, next) {
    if (req.params.id) {
      const userId = req.params.id;
      UserModels.getUserProfile(userId)
        .then(
          result => {
            if (result) {
              res.json(result);
              res.end()
            } else {
              res.redirect('/');
            }
          }
        )
    }
  }

  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static forgotPassword (req, res, next) {
    res.render('partial/pages/forgot/index', {title: 'Востоновление пароля'}, (err, html) => {
      if (err) {
        next(err)
      } else {
        res.send(html).end();
      }
    })
  }
}
module.exports = UserCtrl;
