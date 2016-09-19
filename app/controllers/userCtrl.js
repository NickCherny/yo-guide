"use strict";
const UserModels = require('../models/User');
class UserCtrl{
  static loginUser(req, res, next){
    if(req.body.email && req.body.password){
      res.redirect('/cabinet');
    }
  };
  static logoutUser(req, res, next){
    req.logout();
    res.clearCookie('userId');
    res.redirect('/');
  };
  static registrationUser(req, res, next){
    if(req.body.email && req.body.password){
      let data = {
        firstName: req.body.firstName || '',
        lastName: req.body.lastName || '',
        email: req.body.email || '',
        password: req.body.password || ''
      };

      UserModels.registrationUser(data, (err, result)=>{
        if(err){
          return err;
        }

        if(result.affectedRows === 1){
          UserModels.selectUIdUEmailUPassword(req.body, (err, rows)=>{
            if(err) return err;
            if(rows[0]['user_id']){
              res.location('/cabinet');
              res.cookie('userId', rows[0]['user_id'], {maxAge: 600 * 1000});
              res.render('cabinet/cabinet', {title: 'Добро пожаловать в личный кабинет', user: rows[0]['user_id']});
            }
          });
        }
      });
    }else {
      res.redirect('/');
    }
  };
  static getUserProfile(req, res, next){
    console.log(req.params.id);
    res.redirect('/cabinet');
  }
}
module.exports = UserCtrl;
