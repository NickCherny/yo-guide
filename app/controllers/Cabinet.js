'use strict';
const User = require('../models/User');
const formidable = require('formidable');
const fs = require('fs');
const Files = require('../utils/Files.util.js');


/**
 *
 * @Class Cabinet - Обрабатывает все запросы связанные с Кабинетом пользователя
 */
class Cabinet {
  /**
   *
   * @constructor
   * @param {Number} userId - user id
   * @param {String} userFullName - user full name
   * @param {String} userPhoto - profile photo src
   * @param {Array String} userLocation - user country and user city
     */
  constructor (userId, userFullName, userPhoto, userLocation) {
    this.userId = userId;
    this._imagesDir = null;

    if (!this._imagesDir) {
      this._imagesDir = this.createUserImagesDir(this.userId);
    }
  }
  static home (req, res, next) {
    console.log(req.session.passport);
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
          console.error(err);
          res.redirect('back')
        } else {
          res.send(html);
          res.end()
        }
      })
  }
  static updateProfile (req, res, next) {
    let userId = req.params.id || '';
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
        .catch(err => console.error(err))
    }
    if (req.body.country || req.body.city) {
      User.uploadUserLocation(userId, req.body)
    }
    res.json({
      profileUpdate: 1
    });
    res.end()
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static userInfo (req, res, next) {
    console.log(req.params.id);
    if (req.params.id) {
      User.getUserProfile(req.params.id)
        .then(
          data => {
            console.log(data);
            let response = {
              "fullName": (data['user_fullName']) ? data['user_fullName'].replace(':', ' ') : '',
              "status": data['user_status'] || '',
              "level": data['user_level'] || '',
              "photo": data['photo'] || '/images/users/photoProfileDefault.png',
              "location": data['location'] || ''
            };
            res.json(response);
            res.end()
          }
        )
        .catch(err => console.error(err))
    }
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static userGuests (req, res, next) {
    if (req.params.id) {
      User.getGuests(req.params.id, (err, result) => {
        if (err) next(err);
        res.json(result);
        res.end()
      })
    }
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static userTravels (req, res, next) {
    if (req.params.id) {
      User.getTravels(req.params.id, (err, result) => {
        if (err) next(err);
        console.log(result);
        res.json(result);
        res.end()
      })
    }
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static uploadPhoto (req, res, next) {
    if (req.params.id) {
      let photo = new Files(String(req.params.id));
      photo.uploadPhoto(req)
        .then(
          data => {
            res.json(data);
            res.end();
          },
          err => {
            console.error(err);
            res.end();
          }
        )
        .catch(err => console.error(err));
    }
  }

  /**
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @param {function} next
   */
  static deletePhoto (req, res, next) {
    if (req.params.id && req.params.name) {
      let photo = new Files(String(req.params.id));

      photo.deleteImage(req.params.name)
        .then(
          res => {
            console.log(res)
          },
          err => {
            console.error(err)
          }
        )
        .catch(err => console.error(err))
    } else {
      res.sendStatus(400);
      res.end()
    }
  }

  /**
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @param {function} next
   */
  static showUserMessages (req, res, next) {
    res.render('partial/user/message', {title: 'Сообщения'}, (err, html) => {
      if (err) next(err);
      res.send(html).end();
    })
  }
}
module.exports = Cabinet;
