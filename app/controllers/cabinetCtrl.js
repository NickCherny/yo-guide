"use strict";

class Cabinet{
  home(req, res, next){

    if(req.session.passport.user[0].user_id){
      res.cookie('userId', req.session.passport.user[0].user_id)
    }
    res.render('cabinet/cabinet', {
      title: 'Кабинет пользователя',
      user: req.session.body
    },
      function(err, html){
      if(err){
        console.error(err);
        res.redirect('back');
      }else {
        res.send(html);
        res.end();
      }
    })
  };
  profile(req, res, next){};
  settings(req, res, next){};
}
module.exports = Cabinet;
