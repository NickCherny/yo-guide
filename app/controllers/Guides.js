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
              console.log(rows.length);
              if (rows.length === 1) {
                GuidesModel.guideInfo(rows[0]['user_id'])
                  .then(
                    rows => {
                      res.json(rows).end();
                    },
                    err => {
                      console.error(err);
                      res.end();
                    }
                  )
                  .catch(err => console.error(err))
              } else {
                let guidesId = [];
                // Создаём масив с id гидов
                rows.forEach((item, i) => {
                  guidesId.push(item['user_id'])
                });

                // Делаем паральную выборку информации о гидах
                Promise.all(guidesId.map(GuidesModel.guideInfo))
                  .then(result => {
                    console.log(result)
                  })
                  .catch(err => console.error(err));

                res.end()
              }
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
