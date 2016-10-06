const pool = require('./connect');
/**
 * @class
 */
class Photos {

  /**
   *
   * @param {String} id - user id
   * @param {String} type - photo_type
   * @returns {Promise}
   */
  static getPhoto (id='', type='') {
    let sql = `
    SELECT photo_src AS src, photo_alt AS alt
    FROM photo
    WHERE photo_type = ? AND photo_user_id = ?;
    `;
    let inserts = [type, id];
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  }
}
module.exports = Photos;
