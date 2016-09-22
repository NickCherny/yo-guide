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
}
module.exports = GuideCtrl
