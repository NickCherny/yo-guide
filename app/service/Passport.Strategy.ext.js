// Create passport strategy
const LoacalStrategy = require('passport-local').Strategy;
const db = require('../models/index');

class AppStrateges{
  adminLogin(){
    return new LoacalStrategy(function(username, password, done){
      if(username !== 'nick' && password !== '123') {
        return done(null, false, {message: 'Неверный логин или пароль'})
      }
      return done(null, {username: username})
    })
  }
}
module.exports = AppStrateges;
