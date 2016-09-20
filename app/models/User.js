const md5 = require('md5')
const pool = require('./connect')

class User {

  /**
   *
   * @param {object} data - user data
   * @param {function} callback - callback function
     */
  static selectUIdUEmailUPassword (data, callback) {
    let sql = `
      SELECT user_id
      FROM user
      WHERE user_email = ? AND user_password = ?;
    `
    let inserts = [
      data.email,
      md5(data.password)
    ]
    pool.query(sql, inserts, callback)
  }

  /**
   *
   * @param {object} data - user data => email
   * @param {function} callback - callback function
   */
  static isUser (data, callback) {
    let sql = `
      SELECT COUNT(*) as u
      FROM yo_db.user
      WHERE user_email = ?
    `
    let inserts = [
      data.email || ''
    ]
    pool.query(sql, inserts, (err, result) => {
      if (err) return callback(err)

      if (result[0]['u'] === 0) {
        callback(null)
      } else {
        callback('пользователь существует')
      }
    })
  }

  /**
   *
   * @param {object} data - user data => fullName, email, password
   * @param {function} callback - callback function
     */
  static registrationUser (data, callback) {
    this.isUser(data, function (err) {
      if (err) callback(err)
      let sql = `
      INSERT INTO user
      (user_fullName, user_email, user_password)
      VALUES(?, ?, ?);
      `

      let inserts = [
        `${data.firstName || ''}:${data.lastName || ''}`,
        data.email || '',
        md5(data.password || '')
      ]
      pool.query(sql, inserts, callback)
    })
  }
  /**
  * @param {string} id - table user_id
  * @param {function} callback - callback function
  */
  static getProfilePhoto (id = '', callback) {
    let sql = `
    SELECT photo_src, photo_alt
    FROM photo
    WHERE photo_type = 'profile' AND photo_user_id = ?;
    `
    pool.query(sql, id, callback)
  }
  /**
  *
  * @param {string} id - user_id
  * @param {function} callback - callback function
  */
  static getGuest (id = '', callback) {
    let sql = `
    SELECT *
    FROM guest
    WHERE user_user_id = ?;
    `
    pool.query(sql, id, callback)
  }
  /**
  *
  * @param {string} location - user_location
  * @param {function} callback - callback function
  */
  static searchUserForLocation (location = '', callback) {
    let sql = `
    SELECT user_id, user_fullName, user_location, user_status
    FROM user
    WHERE user_location = ?;
    `
    pool.query(sql, location, (err, result) => {
      if (err) callback(err)
      if (result[0]['user_id']) {
        this.getProfilePhoto(result[0]['user_id'], (err, rows) => {
          if (err) callback(err)
        })
        this.getGuest(result[0]['user_id'], (err, rows) => {
          if (err) callback(err)
        })
      }
    })
  }
  /**
  *
  * @param {string} id - user_id
  * @param {Object} callback - callback (err, rows)
  */
  static getUserLocation (id = '', callback) {
    let sql = `
    SELECT location_country, location_city
    FROM location
    WHERE location_user_id = ?;
    `
    pool.query(sql, id, callback)
  }
  /**
  *
  * @param {string} id - user_id
  * @param {Object} callback - callback (err, rows)
  */
  static getUserProfile (id = '', callback) {
    let sql = `
    SELECT user_fullName, user_status, user_level
    FROM user
    WHERE user_id = ?;
    `
    pool.query(sql, id, (err, rows) => {
      if (err) callback(err)
      if (rows[0]) {
        this.getProfilePhoto(id, (err, result) => {
          if (err) callback(err)
          if (result) {
            rows[0]['photo'] = result[0] || '/images/users/photoProfileDefault.png'
            this.getUserLocation(id, (err, result) => {
              if (err) callback(err)
              if (result) {
                rows[0]['location'] = result[0] || 'Город Страна'
                callback(null, rows[0])
              }
            })
          }
        })
      }
    })
  }
  /**
  *
  * @param {string} id - user_id
  * @param {Object} callback - callback (err, rows)
  */
  static getGuests (id = '', callback) {
    let sql = `
    SELECT travel_user_id, travel_date
    FROM travel
    WHERE travel_guide_id = ?
    ORDER BY travel_id
    DESC;
    `
    pool.query(sql, id, (err, result) => {
      if (err) callback(err)
      if (result.length > 1) {
        result.forEach(guest => {
          this.getProfilePhoto(guest['travel_user_id'], (err, rows) => {
            if (err) callback(err)
            guest['photo'] = rows[0]['photo_src'] || '/images/users/photoProfileDefault.png'
          })
        })
      } else if (result[0]) {
        this.getProfilePhoto(result[0]['travel_user_id'], (err, rows) => {
          if (err) callback(err)
          result[0]['photo'] = rows[0]['photo_src'] || '/images/users/photoProfileDefault.png'
        })
      } else {
        callback(null, [])
      }
    })
  }
  /**
  *
  * @param {string} id - user_id
  * @param {Object} callback - callback (err, rows)
  */
  static getTravels (id = '', callback) {
    let sql = `
    SELECT travel_id, travel_guide_id, travel_date
    FROM travel
    WHERE travel_user_id = ? AND travel_date > CURRENT_DATE()
    ORDER BY travel_date;
    `
    pool.query(sql, id, (err, result) => {
      if (err) callback(err)
      if (result.length > 1) {
        result.forEach(item => {
          this.getUserProfile(item['travel_guide_id'], (err, guide) => {
            if (err) callback(err)
            item['guide'] = guide[0]
          })
        })
      } else if (result.length === 1) {
        this.getUserProfile(result[0]['travel_guide_id'], (err, guide) => {
          if (err) callback(err)
          result[0]['guide'] = guide[0]
        })
      } else {
        callback(null, [])
      }
    })
  }
}
module.exports = User
