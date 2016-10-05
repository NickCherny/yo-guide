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
    SELECT location_user_id
    FROM location
    WHERE location_country = ? OR location_city = ?
    ORDER BY location_user_id;
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
