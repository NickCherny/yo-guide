'use strict';

// Create passport strategy
const LoacalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const md5 = require('md5');

class AppStrateges {
  adminLogin () {
    return new LoacalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, function (username, password, done) {
      if (process.env === 'development') console.log(md5(username, password));
      User.selectUIdUEmailUPassword({email: username, password: password})
        .then(
          result => {
            if (result[0] && result[0]['user_id']) {
              done(null, {username: result, userId: result[0]['user_id']})
            }
            done(null, false, {message: 'Неверный логин или пароль'})
          },
          err => {
            if (process.env === 'development') console.error(err);
            done(null, false, {message: 'Неверный логин или пароль'})
          }
        )
    })
  };
}
module.exports = AppStrateges;
