"use strict";
class Cabinet{
  static home(req, res, next){
    console.log(req.session.passport);
    if(req.session.passport.user[0].user_id){
      res.cookie('userId', req.session.passport.user[0].user_id)
    }
    res.render('partial/cabinet/index', {
      title: 'Кабинет пользователя',
      user: req.session.body,
      auth: req.isAuthenticated()
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
  }
}
module.exports = Cabinet;
