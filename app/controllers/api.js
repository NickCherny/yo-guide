const join = require('path').join

class restAPI {
  /**
   *
   * @param req
   * @param res
   * @param next
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
}
module.exports = restAPI
