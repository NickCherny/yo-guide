const join = require('path').join
const User = require('../models/User')

class API {
  /**
  *
  * @param {Object} req - Express HTTP Request
  * @param {Object} res - Express HTPP Response
  * @param {Object} next - Express function
  */
  static regulationsController (req, res, next) {
    const _DIR = '/docs/regulations/'
    let name = req.params.name || ''

    switch (name) {
      case '1':
        res.download(join(_DIR, name))
        res.end()
        break
      case '2':
        res.download(join(_DIR, name))
        res.end()
        break
      case '3':
        res.download(join(_DIR, name))
        res.end()
        break
      default:
        res.end()
        break
    }
  }
  /**
  *
  * @param {Object} req - Express HTTP Request
  * @param {Object} res - Express HTPP Response
  * @param {Object} next - Express function
  */
  static userInfo (req, res, next) {
    console.log(req.params.id)
    if (req.params.id) {
      User.getUserProfile(req.params.id, (err, row) => {
        if (err) next(err)
        let data = {}
        data['fullName'] = row['user_fullName'].replace(':', ' ')
        data['status'] = row['user_status']
        data['level'] = row['user_level']
        data['photo'] = row['photo']
        data['location'] = row['location']
        res.json(data)
        res.end()
      })
    }
  }
  /**
  *
  * @param {Object} req - Express HTTP Request
  * @param {Object} res - Express HTPP Response
  * @param {Object} next - Express function
  */
  static userGuests (req, res, next) {
    if (req.params.id) {
      
    }
  }
}
module.exports = API
