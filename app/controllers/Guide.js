class GuideCtrl {
  static guidesBoard (req, res, next) {
    let data = {
      title: 'Гиды',
      auth: req.isAuthenticated(),
      image: {
        src: 'minsk.jpg',
        alt: 'Minsk'
      }
    }
    res.render('partial/guides/index', data, (err, html) => {
      if (err) next(err)

      res.send(html)
      res.end()
    })
  }
  static searchGuide (req, res, next) {};

  /**
   *
   * @param {Object} req - request express object
   * @param {Object} res - response express object
   * @param {function} next - next function
   * @status --process
   */
  static searchLocation (req, res, next) {
    console.log(req.path);
    res.redirect('/');
  }
}
module.exports = GuideCtrl
