// Create passport strategy
const LoacalStrategy = require('passport-local').Strategy;
const db = require('../models/index');

module.exports = function(){
  return new LoacalStrategy(function(username, password, done){
    db.admin.getNamePassword((err, results)=>{
      if(err){
        console.error(err)
      }else {
        if(username !== results[0].admin_login && password !== results[0].admin_password) {
          return done(null, false, {message: 'Неверный логин или пароль'})
        }
      }
    });
    return done(null, {username: username})
  })
};
