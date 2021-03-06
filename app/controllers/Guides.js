'use strict'
const GuidesModel = require('../models/Guides');
const _ = require('lodash');

class GuideCtrl {
  static guidesBoard (req, res, next) {
    let data = {
      title: 'Гиды',
      auth: req.isAuthenticated(),
      guidesLocation: req.params.text,
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

      let location = _.trim(_.escape(req.params.text));
      GuidesModel.searchGuidesLocation(location)
        .then(
          rows => {
            if (rows.length !== 0) {
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
                rows.forEach((item) => {
                  guidesId.push(item['user_id'])
                });

                // Делаем паральную выборку информации о гидах
                Promise.all(guidesId.map(GuidesModel.guideInfo))
                  .then(result => {
                    res.json(result).end()
                  })
                  .catch(err => console.error(err));
              }
            } else {
              res.status(204).end();
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

  /**
   *
   * @param req
   * @param res
   * @param next
     */
  static getGuideProfile (req, res, next) {
    let data = {title: 'Профиль гида', userId: req.params.id};

    res.render('partial/user/profile', data, (err, html) => {
      if (err) next(err);
      res.send(html).end();
    })
  }
}
module.exports = GuideCtrl;
