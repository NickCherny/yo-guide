"use strict";
const db = require('../models');

class Main{
  load(req, res, next){
    let self = this;
    if(req.isAuthenticated()){
      console.log('Главная для залогиненного пользователя')
      res.redirect('/cabinet');
    }else {
      db.user.getTest(function(err, result){
        if(err){
          console.log(err)
        }else{
          console.log(result)
        }
      });
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
