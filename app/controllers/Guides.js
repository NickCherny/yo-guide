const GuidesModel = require('../models/Guides');
class GuideCtrl {
  static guidesBoard (req, res, next) {
    let data = {
      title: 'Гиды',
      auth: req.isAuthenticated(),
      image: {
        src: 'minsk.jpg',
        alt: 'Minsk'
      }
    };
    res.render('partial/guides/index', data, (err, html) => {
      if (err) next(err);

      res.send(html);
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
    if (req.params.text) {
      let location = req.params.text || '';

      GuidesModel.searchGuidesLocation(location)
        .then(
          rows => {
            if (rows.length !== 0) {
              let guides = [];
              let len = rows.length - 1;
              rows.forEach((item, i) => {
                GuidesModel.guideInfo(item['location_user_id'])
                  .then(
                    rows => {
                      return rows
                    },
                    err => {
                      console.error(err)
                    }
                  )
                  .then(rows => {
                    guides.push(rows);
                    if (i === len) res.json(guides).end();
                  })
                  .catch(err => console.error(err))
              });
            } else {
              res.end();
            }
          },
          err => {
            console.error(err);
            res.end();
          }
        )
        .catch(err => console.error(err))
    }
  }
}
module.exports = GuideCtrl;
