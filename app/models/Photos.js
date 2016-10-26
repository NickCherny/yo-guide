'use strict'
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

  /**
   *
   * @param userid
   * @param src
   * @param alt
   * @param type
   * @returns {Promise}
   */
  static updatePhoto (userid='', src='', alt='', type='profile') {
    if (userid !== '' && src !== '') {
      let sql = `
      UPDATE photo
      SET photo_src = ?,
      photo_alt = ?
      WHERE photo_user_id = ? AND photo_type = ?
      `;
      let inserts = [src, alt, userid, type];
      return new Promise((resolve, reject) => {
        pool.getConnection((err, _connection) => {
          if (err) reject(err);
          _connection.query(sql, inserts, (err, result) => {
            if (err) reject(err);
            resolve(result);
            _connection.release()
          })
        })
      })
    }
  }
}
module.exports = Photos;
