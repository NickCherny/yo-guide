'use strict'
const pool = require('./connect');
/**
 * @class
 */
class Laguages {
  /**
   *
   * @param {String} id - user id
   * @returns {Promise}
   */
  static getUserLanguages (id='') {
    let sql = `
    SELECT language_name
    FROM language
    WHERE language_id = (SELECT userLanguage_language_id FROM userLanguage WHERE userLanguage_user_id = ?)
    ORDER BY language_id;
    `;
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  }
}
/**
 * @exports Class Languages
 * @type {Laguages}
 */
module.exports = Laguages;
