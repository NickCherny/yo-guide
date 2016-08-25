"use strict";

// Create passport strategy
const LoacalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const db = require('../models/index');

class AppStrateges{
  adminLogin(){
    return new LoacalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },function(username, password, done){
      db.user.checkUserLoginPassword({email: username, password: password}, function(err, result){
        if(err){
          // ошибка запроса
          console.error(err);

          return done(null, false, {message: 'Неверный логин или пароль'})
        }else {
          console.log(result[0]);
          return done(null, {username: result, userId: result[0]['user_id']})
        }
      });
    })
  };
}
module.exports = AppStrateges;
