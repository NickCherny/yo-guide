"use strict";
const db = require('../models');

class User{
  loginUser(req, res, next){
    if(req.body.email && req.body.password){
      res.redirect('/cabinet');
    }
  };
  logoutUser(req, res, next){
    req.logout();
    res.clearCookie('userId');
    res.redirect('/');
  };
  registrationUser(req, res, next){
    if(req.body.email && req.body.password){
      db.user.registrationUser(req.body, function(err, result){
        if(err){
          return err;
        }
        if(result.affectedRows === 1){
          db.user.getUserId(req.body, function(err, rows){
            if(err) return err;
            if(rows[0]['user_id']){
              res.location('/cabinet');
              res.cookie('userId', rows[0]['user_id'], {maxAge: 600 * 1000});
              res.render('cabinet/cabinet', {title: 'Добро пожаловать в личный кабинет', user: rows[0]['user_id']});
            }
          });
        }
      })
    }
  };
  getUserProfile(req, res, next){
    console.log(req.params.id);
    res.redirect('/cabinet');
  }
}
module.exports = User;
