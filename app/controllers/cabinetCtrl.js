'use strict'
const User = require('../models/User')
class Cabinet {
  static home (req, res, next) {
    console.log(req.session.passport)
    if (req.session.passport.user[0].user_id) {
      res.cookie('userId', req.session.passport.user[0].user_id)
    }
    res.render('partial/cabinet/index', {
      title: 'Кабинет пользователя',
      user: req.session.body,
      auth: req.isAuthenticated()
    },
      function (err, html) {
        if (err) {
          console.error(err)
          res.redirect('back')
        } else {
          res.send(html)
          res.end()
        }
      })
  }
  static updateProfile (req, res, next) {
    let userId = req.params.id || ''
    if (req.body.firstName || req.body.lastName) {
      User.uploadUserName(userId, req.body)
        .then(
          result => {
            if (result.affectedRows === 1 && result.changedRows === 1) {
              console.log('Имя изменено')
            }
          },
          err => {
            next(err)
          }
        )
    }
    if (req.body.country || req.body.city) {
      User.uploadUserLocation(userId, req.body)
        .then(
          result => {
            console.log(result)
          },
          err => {
            console.error(err)
          }
        )
    }
    res.json({
      profileUpdate: 1
    })
    res.end()
  }
}
module.exports = Cabinet
