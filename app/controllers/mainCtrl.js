"use strict";
const db = require('../models');

class Main{
  static main(req, res, next){
    let self = this;
    if(req.isAuthenticated()){
      console.log('Главная для залогиненного пользователя');
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

  /**
   *
   * @param {object} req - HTTP request
   * @param {object} res - response
   * @param {function} next
     */
  static aboutFounders(req, res, next){
    let data = {
      title: 'Создатели проекта yo-guide'
    };
    res.render('pages/about/founders', data, (err, html)=>{
      if(err) next(err);
      res.send(html);
      res.end();
    })
  }
  /**
   *
   * @param {object} req - HTTP request
   * @param {object} res - response
   * @param {function} next
     */
  static aboutUs(req, res, next){
    let data = {
      title: 'Как работают сервисы'
    };
    res.render('pages/about/index', data, (err, html)=>{
      if(err){
        next(err);
      }else {
        res.send(html);
        res.end();
      }
    })
  };

  /**
   *
   * @param {object} req - HTTP request
   * @param {object} res - response
   * @param {function} next
   */
  static howItsWork(req, res, next){
    let data = {
      title: 'Как приложение работает'
    };
    res.render('pages/howItsWork', data, (err, html)=>{
      if(err) next(err);
      res.send(html);
      res.end();
    })
  }

  /**
   *
   * @param req
   * @param res
   * @param next
     */
  static regulations(req, res, next){
    let data = {
      title: 'Правила взаимо комфортного использования'
    };
    res.render('pages/regulations/index', data, (err, html)=>{
      if(err) next(err);
      res.send(html);
      res.end();
    });
  }
}
module.exports = Main;
