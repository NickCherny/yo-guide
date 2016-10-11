'use strict'
class Admin {
  /**
   *
   * @param {Object} req - HTTP Request Object
   * @param {Object} res - HTTP Response Object
   * @param {Function} next - next function
   */
  static home (req, res, next) {
    if (req.session.userStatus === 'admin') {
      res.render('admin/index', {title: 'Панель админестратора'}, (err, html) => {
        if (err) {
          console.error(err);
          res.redirect('/')
        } else {
          res.send(html).end()
        }
      })
    } else {
      res.redirect('/')
    }
  }
  /**
   *
   * @param {Object} req - HTTP Request Object
   * @param {Object} res - HTTP Response Object
   * @param {Function} next - next function
   */
  static form (req, res, next) {
    res.render('admin/login', {title: 'Вход'}, (err, html) => {
      if (err) {
        console.error(err)
        res.redirect('back');
      } else {
        res.send(html).end();
      }
    })
  }
  static login (req, res, next) {
    if (req.body.username !== 'admin' || req.body.password !== '123') {
      res.redirect('/admin/form').end();
    } else {
      req.session.userStatus = 'admin';
      res.redirect('/admin/home');
    }
  }
  static logout (req, res, next) {
    req.session.userStatus = 'user';
    res.redirect('/')
  }
}
module.exports = Admin;
