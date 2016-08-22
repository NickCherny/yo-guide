"use strict";

class Main{
  load(req, res, next){
    let self = this;
    if(req.isAuthenticated()){
      console.log('Главная для залогиненного пользователя')
      res.redirect('/cabinet');
    }else {
      res.render('pages/mainPage', {
        title: 'Гиды, туры по всему миру'
      },
        function(err, html){
        if(err){
          console.error(err)
        }else {
          res.send(html);
          res.end();
        }
      })
    }
  };
}
module.exports = Main;
