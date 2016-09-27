const md5 = require("md5");
const pool = require("./connect")

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
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
    })
  }

  /**
   *
   * @param {object} data - user data => email
   * @param {function} callback - callback function
   */
  static isUser (data) {
    let sql = `
      SELECT COUNT(*) as u
      FROM yo_db.user
      WHERE user_email = ?
    `
    let inserts = [
      data.email || ''
    ]
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, result) => {
        if (err) reject(err)
        resolve(result[0])
      })
    })
  }

  /**
   *
   * @param {object} data - user data => fullName, email, password
   * @param {function} callback - callback function
     */
  static registrationUser (data, callback) {
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
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  /**
  * @param {string} id - table user_id
  * @return Promise Object
  */
  static getProfilePhoto (id = '') {
    let sql = `
    SELECT photo_src, photo_alt
    FROM photo
    WHERE photo_type = 'profile' AND photo_user_id = ?;
    `
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
    })
  }

  /**
   *
   * @param {String} id - user id
   * @return Promise Object
   */
  static getFullName (id) {
    let sql = `
    SELECT user_fullName
    FROM user
    WHERE user_id = ?;
    `
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
    })
  }

  /**
   *
   * @param {String} id - user id
   * @return Promise Object
   */
  static getLocationUser (id) {
    let sql = `
    SELECT location_country, location_city, location_id
    FROM location
    WHERE location_user_id = ?;
    `
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
    })
  }

  /**
  *
  * @param {string} id - user_id
  * @param {Object} callback - callback (err, rows)
  */
  static getUserProfile (id = '', callback) {
    let responseData = {}
    return this.getFullName(id)
      .then(
        rows => {
          return rows[0]
        },
        err => {
          console.error(err)
        }
      )
      .then(
        fullName => {
          responseData['user_fullName'] = fullName['user_fullName'] || ''
          return this.getProfilePhoto(id)
        }
      )
      .then(
        rows => {
          return rows[0]
        },
        err => {
          console.error(err)
        }
      )
      .then(
        photo => {
          responseData['photo'] = photo
          return responseData
        }
      )
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

  /**
  *
  * @param {String} id - user id
  * @param {Object} data - firstName{String} or lastName{String}
  * @return Promise Object
   */
  static uploadUserName (id = '', data) {
    let sql = `
    UPDATE user
    SET user_fullName = ?
    WHERE user_id = ?;
    `
    return new Promise((resolve, reject) => {
      pool.query('SELECT user_fullName FROM user WHERE user_id = ?', id, (err, rows) => {
        if (err) reject(err)
        resolve(rows[0])
      })
    })
    .then(
      row => {
        if (row['user_fullName']) {
          let [firstName, lastName] = row['user_fullName'].split(':')
          let newFullName = null
          firstName = data.firstName || firstName
          lastName = data.lastName || lastName
          newFullName = `${firstName}:${lastName}`
          if (newFullName) {
            return new Promise((resolve, reject) => {
              pool.query(sql, [newFullName, id], (err, result) => {
                if (err) reject(err)
                resolve(result)
              })
            })
          }
        }
      },
      err => {
        console.error(err)
      }
    )
  }
  /**
  *
  * @param {String} id - user id
  * @param {Object} data - country{String} or city{String}
  * @return Promise Object
   */
  static uploadUserLocation (id = '', data) {
    return this.getLocationUser(id)
      .then(
      // обрабатываем ответ СУБД
      rows => {
        if (rows.length === 0) { // если у данного пользователя ещё не настроина локация
          let sql = `
          INSERT INTO location
          (location_country, location_city, location_user_id)
          VALUES (?, ?, ?);
          `
          let inserts = [
            data.country || '',
            data.city || '',
            id
          ]
          return new Promise((resolve, reject) => {
            pool.query(sql, inserts, (err, result) => {
              if (err) reject(err)
              resolve(result)
            })
          })
        } else { // если у пользователя уже есть данные по локации, заменяем их
          let sql = `
          UPDATE location
          SET location_country = ?, location_city = ?
          WHERE location_user_id = ?;
          `
          let nCountry = (data.country !== undefined) ? data.country : rows[0]['location_country']
          let nCity = (data.city !== undefined) ? data.city : rows[0]['location_city']
          let inserts = [
            nCountry,
            nCity,
            id
          ]
          return new Promise((resolve, reject) => {
            pool.query(sql, inserts, (err, result) => {
              if (err) reject(err)
              resolve(result)
            })
          })
        }
      },
      // Обработка ошибки
      err => {
        console.error(err)
      }
    )
  }
}
module.exports = User
