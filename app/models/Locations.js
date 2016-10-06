const pool = require('./connect');
/**
 * @class
 */
class Locations {

  /**
   *
   * @param {String} id - user id
   * @return Promise Object
   */
  static getUserLocation (id='') {
    let sql = `
    SELECT location_country AS country, location_city AS city, location_photo AS photo
    FROM location
    WHERE location_id = (SELECT userLocation_location_id FROM userLocation WHERE userLocation_user_id = ?);
    `;
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err);
        resolve(rows)
      })
    })
  }
}

/**
 * @exports Class Location
 * @type {Locations}
 */
module.exports = Locations;
