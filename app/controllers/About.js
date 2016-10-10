'use strict';
/**
 *
 * @Class About - Обрабатывает все запросы связанные с URL /about/*
 */
class About {
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
    res.render('partial/pages/about/index', data, (err, html)=>{
      if (err) {
        next(err);
      } else {
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
  static aboutFounders(req, res, next){
    let data = {
      title: 'Создатели проекта yo-guide'
    };
    res.render('partial/pages/about/founders', data, (err, html)=>{
      if(err) next(err);
      res.send(html);
      res.end();
    })
  }
}
module.exports = About;
