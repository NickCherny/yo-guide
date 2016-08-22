"use strict";

class Cabinet{
  home(req, res, next){
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
