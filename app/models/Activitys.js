const pool = require('./connect');

/**
 * @class
 */
class Activitys {

  /**
   *
   * @returns {Promise}
   */
  static getAllActivitys () {
    let sql = `SELECT activity_name AS name, activity_urlName FROM activity;`;
    return new Promise((resolve, reject) => {
      pool.query(sql, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  }

  /**
   *
   * @param {String} id - user id
   * @returns {Promise}
   */
  static getUserActivity (id = '') {
    let sql = `
    SELECT activity_name AS name, activity_urlName AS urlName
    FROM activity
    WHERE activity_id = (SELECT au_activity_id FROM au WHERE au_user_id = ?)
    ORDER BY activity_id;
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
 *
 * @exports Class Activitys
 * @type {Activitys}
 */
module.exports = Activitys;
