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
      if(username !== 'nick@tut.by' && password !== '123') {
        return done(null, false, {message: 'Неверный логин или пароль'})
      }
      return done(null, {username: username})
    })
  };
}
module.exports = AppStrateges;
