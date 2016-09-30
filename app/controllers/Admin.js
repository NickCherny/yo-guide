class Admin {
  /**
   *
   * @param {Object} req - HTTP Request Object
   * @param {Object} res - HTTP Response Object
   * @param {Function} next - next function
   */
  static home (req, res, next) {
    res.render('admin/index', {title: 'Панель админестратора'}, (err, html) => {
      if (err) {
        res.redirect('back');
      } else {
        res.send(html);
      }
    })
  }
  /**
   *
   * @param {Object} req - HTTP Request Object
   * @param {Object} res - HTTP Response Object
   * @param {Function} next - next function
   */
  static form (req, res, next) {
    res.render('admin/form', {title: 'Вход'}, (err, html) => {
      if (err) {
        res.redirect('back');
      } else {
        res.send(html).end();
      }
    })
  }
  static login (req, res, next) {
    console.log(req.session);
    req.session.admin = 'Привет админ';
    res.redirect('/admin/home')
  }
}
module.exports = Admin;
