'use strict';
const UserModels = require('../models/User');
const GE = require('../service/GuideEvents');

/**
 *
 * @Class Account - Класс для обработки запросов связонных с авторизацией пользователя
 */
class Account {

  /**
   *
   * @constructor
   * @param id - user id
     */
  constructor (id) {
    this._id = id
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static showRegistrationForm (req, res, next) {
    let data = {
      title: 'Регистрация пользователя'
    };
    res.render('partial/user/registration', data, (err, html) => {
      if(err) next(err);
      res.send(html);
      res.end();
    })
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static loginUser (req, res, next) {
    if (req.body.email && req.body.password) {
      res.redirect('/cabinet')
    }
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static logoutUser (req, res, next) {
    req.logout();
    res.clearCookie('userId');
    res.redirect('/');
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static registrationUser (req, res, next) {
    if (req.body.email && req.body.password) {
      let data = {
        firstName: req.body.firstName || '',
        lastName: req.body.lastName || '',
        email: req.body.email || '',
        password: req.body.password || ''
      };
      UserModels.isUser(data)
        .then(
          result => {
            GE.emit('isUser', result)
          },
          err => {
            res.next(err)
          }
        );
      GE.on('isUser', (user) => {
        if (user['u'] === 0) {
          UserModels.registrationUser(data)
            .then(
              result => {
                return result
              },
              err => {
                res.next(err)
              }
            )
            .then(
              result => {
                if (result.affectedRows === 1) {
                  return UserModels.selectUIdUEmailUPassword(data)
                }
                // todo: Нужно реализовать ответ на случей ошибки от СУБД
              }
            )
            .then(
              rows => {
                if (rows[0]['user_id']) {
                  res.render('partial/pages/success/registration', {title: 'Успешная регистрация'}, (err, html) => {
                    if (err) {
                      next(err)
                    } else {
                      res.send(html).end();
                    }
                  })
                }
              },
              err => {
                res.next(err)
              }
            )
        } else {
          res.locals.registrationError = 'Не получилось создать акаунт'
          res.redirect('/user/registration')
        }
      })
    } else {
      res.redirect('/')
    }
  }
}
module.exports = Account
