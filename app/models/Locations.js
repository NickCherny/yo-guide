'use strict'
const clearStr = require('../utils/ClearStr.util');
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
    SELECT location_country AS country, location_city AS city, location_photo AS photo, location_id
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
  /**
   *
   * @param data
   * @param photo
   */
  static createLocation (data = {country:'',city:'',photo:''}) {
    if (data.country !== '' && data.city !== '') {
      let sql = `
      INSERT INTO location
      (location_country, location_city, location_photo)
      VALUES (?, ?, ?);
      `;
      let inserts = [clearStr(data.country), clearStr(data.city), clearStr(data.photo)];
      return new Promise ((resolve, reject) => {
        pool.query(sql, inserts, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    }
  }

  /**
   *
   * @param data
   * @returns {Promise}
     */
  static updateCommunicationUserAndLocation (data) {
    if (data.userId !== '' && data.locationId !== '') {
      let sql = `
        UPDATE userLocation
        SET userLocation_location_id = ?
        WHERE userLocation_user_id = ?;
        `;
      return new Promise((resolve, reject) => {
        pool.query(sql, [data.locationId, data.userId], (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    }
  }
  /**
   *
   * @param data
   * @returns {Promise}
   */
  static communicationUserAndLocation (data={userId:'', locationId:''}) {
    if (data.userId !== '' && data.locationId !== '') {
      let sql = `
        INSERT INTO userLocation
        (userLocation_location_id, userLocation_user_id)
        VALUES (?, ?);
        `;
      return new Promise ((resolve, reject) => {
        pool.query(sql, [data.locationId, data.userId], (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    }
  }
  /**
   *
   * @param data
   * @returns {Promise}
     */
  static checkLocation (data={city:'', country:''}) {
    let sql = `
     SELECT location_id AS id
     FROM location
     WHERE location_city = ? AND location_country = ?;
    `;
    return new Promise((resolve, reject) => {
      pool.query(sql, [data.city, data.country], (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  }

  /**
   *
   * @param {String} id - id user
   * @param {String{}} data - user country, user city
   * @returns {Promise}
     */
  static updateUserLocation (data={userId:'', country: '', city: '', photo: ''}) {
    let userLocationId = null;
    return this.getUserLocation(data.userId)
      .then(
        result => {
          return result
        },
        err => {
          console.error(err)
        }
      )
      .then(
        result => {
          // если у пользователя уже настроина локация
          if (result.length > 0 && result[0]['location_id']) {
            userLocationId = result[0]['location_id']
          }
          return this.checkLocation(data)
        }
      )
      .then(
        result => {

          if (result.length !== 0) {
            if (userLocationId) {
              return this.updateCommunicationUserAndLocation({userId:data.userId,locationId:result[0]['id']})
            } else {
              return this.communicationUserAndLocation({userId:data.userId,locationId:result[0]['id']})
            }
          } else {
            return this.createLocation(data)
              .then(
                result => {
                  return result
                },
                err => {
                  console.error(err)
                }
              )
              .then(
                result => {
                  if (result.affectedRows === 1 && result.insertId !== 0) {
                    if (userLocationId) {
                      return this.updateCommunicationUserAndLocation({userId:data.userId,locationId:result.insertId})
                    } else {
                      return this.communicationUserAndLocation({userId:data.userId,locationId:result.insertId})
                    }
                  }
                }
              )
          }
        },
        err => {
          console.error(err)
        }
      )
  }

}

/**
 * @exports Class Location
 * @type {Locations}
 */
module.exports = Locations;
