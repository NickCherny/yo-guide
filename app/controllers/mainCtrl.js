"use strict";

class Main {
  /**
   *
   * @param {object} req - HTTP request
   * @param {object} res - response
   * @param {function} next
   */
  static main(req, res, next){
    let self = this;
    if(req.isAuthenticated()){
      console.log('Главная для залогиненного пользователя');
      res.redirect('/cabinet');
    }else {
      res.render('partial/pages/main', {
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
  static success (req, res, next) {
    res.render('partial/pages/success/registration', {title: 'Успешная регистрация'}, (err, html) => {
      if (err) {
        next(err)
      } else {
        res.send(html).end();
      }
    })
  }


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
    res.render('partial/pages/howItsWork', data, (err, html)=>{
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
    res.render('partial/pages/regulations/index', data, (err, html)=>{
      if(err) next(err);
      res.send(html);
      res.end();
    });
  }
  /**
   *
   * @param {Object} req - Express HTTP Request
   * @param {Object} res - Express HTPP Response
   * @param {Object} next - Express function
   */
  static contact (req, res, next) {
    if(req.method === 'GET'){
      res.render('partial/pages/contact/index', {title: 'Связаться с нами'}, (err, html) => {
        if (err) next(err)
        res.send(html)
        res.end()
      })
    } else {
      if (req.body.contact) {
        res.render('partial/pages/contact/success', {title: 'Спасибо за ваше сообщение'}, (err, html) => {
          if (err) next(err)
          res.send(html)
          res.end()
        })
      } else {
        res.render('partial/pages/contact/fail', {title: 'Что та пошло не так'}, (err, html) => {
          if (err) next(err)
          res.send(html)
          res.end()
        })
      }
    }
  }
}
module.exports = Main;
