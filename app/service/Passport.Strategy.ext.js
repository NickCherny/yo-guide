"use strict";

// Create passport strategy
const LoacalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../models/User');

class AppStrateges{
  adminLogin(){
    return new LoacalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },function(username, password, done){
      console.log(username, password);
      User.selectUIdUEmailUPassword({email: username, password: password}, (err, result)=>{
        if(err){
          if(process.env === 'development') console.error(err);
          return done(null, false, {message: 'Неверный логин или пароль'})
        }
        if(result[0]['user_id']){
          return done(null, {username: result, userId: result[0]['user_id']})
        }
        return done(null, false, {message: 'Неверный логин или пароль'})
      });

    })
  };
}
module.exports = AppStrateges;
