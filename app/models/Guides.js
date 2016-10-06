const pool = require('./connect');
const User = require('./User');
class Guides extends User{

  /**
   *
   * @param {String} text - search guide city or country
   * @return {Promise}
     */
  static searchGuidesLocation (text='') {
    let sql = `
    SELECT userLocation.userLocation_user_id AS user_id
    FROM userLocation
    WHERE userLocation.userLocation_location_id = (SELECT location_id FROM location WHERE location_country = ? OR location_city = ?)
    `;
    let inserts = [text, text];
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, rows) => {
        if (err) reject(err);
        resolve(rows)
      })
    })
  }
  static guideInfo (id='') {
    return super.getUserProfile(id)
  }
}
module.exports = Guides;
