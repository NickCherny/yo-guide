const md5 = require("md5");
const pool = require("./connect");
const Locations = require('./Locations');
const Photos = require('./Photos');
const Activitys = require('./Activitys');

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
    `;
    let inserts = [
      data.email,
      md5(data.password)
    ];
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, rows) => {
        if (err) reject(err);
        resolve(rows)
      })
    })
  }

  /**
   *
   * @param {object} data - user data => email
   * @return {Promise}
   */
  static isUser (data) {
    let sql = `
      SELECT COUNT(*) as u
      FROM yo_db.user
      WHERE user_email = ?
    `;
    let inserts = [
      data.email || ''
    ];
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, result) => {
        if (err) reject(err);
        resolve(result[0])
      })
    })
  }

  /**
   *
   * @param {String} id - user id
   * @return Promise Object
     */
  static getUserActivity (id = '') {
    return Activitys.getUserActivity(id);
  }

  /**
   *
   * @param {object} data - user data => fullName, email, password
   * @param {function} callback - callback function
     */
  static registrationUser (data) {
    let firstName = data.firstName.toLowerCase() || '';
    let lastName = data.lastName.toLowerCase() || '';
    let email = data.email.toLowerCase() || '';
    let password = md5(data.password || '');

    function setDefaultState(sql, inserts) {
      return new Promise((resolve, reject) => {
        pool.query(sql, inserts, (err, result) => {
          result['userId'] = userId;
          if (err) reject(err);
          resolve(result);
        })
      })
    }
    let userId = null;
    let sql = `
    INSERT INTO user
    (user_fullName, user_email, user_password)
    VALUES(?, ?, ?);
    `;
    let inserts = [
      `${firstName}:${lastName}`,
      email,
      password
    ];
    return new Promise((resolve, reject) => {
      pool.query(sql, inserts, (err, result) => {
        if (err) reject(err);
        resolve(result)
      })
    })
      .then(
        result => {
          if (result.affectedRows === 1 && result.insertId) {
            userId = result.insertId;
            return setDefaultState('INSERT INTO photo (photo_user_id) VALUES (?)', userId)
          } else {
            return result;
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
   * @return Promise Object
   */
  static getFullName (id) {
    let sql = `
    SELECT user_fullName
    FROM user
    WHERE user_id = ?;
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
  * @param {string} id - user_id
   * @return {Promise}
  */
  static getUserProfile (id = '') {
    let sql = `
    SELECT user_fullName AS fullName, user_status AS status, user_level AS level, user_about AS about, user_id AS id
    FROM user
    WHERE user_id = ?;
    `;
    let responseData = {};
    return new Promise((resolve, reject) => {
      pool.query(sql, id, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
      .then(
        rows => {
          if (rows[0]) {
            return rows[0]
          }
        },
        err => {
          return err
        }
      )
      .then(
        userResult => {
          let correctFullName = userResult.fullName || '';
          if (correctFullName !== '') {
            correctFullName = correctFullName.replace(':', ' ');
          }
          userResult.fullName = correctFullName;
          responseData = userResult;
          return Photos.getPhoto(id, 'profile');
        }
      )
      .then(
        rows => {
          return rows
        },
        err => {
          console.error(err)
        }
      )
      .then(
        photo => {
          if(photo[0]){
            responseData['photo'] = photo[0]['src'];
          } else {
            responseData['photo'] = '/images/users/photoProfileDefault.png';
          }
          return responseData
        }
      )
      .then(
        responseData => {
          return Activitys.getUserActivity(id);
        }
      )
      .then(
        rows => {
          responseData['activity'] = rows[0] || [];
          return responseData
        },
        err => {
          console.log(err);
          responseData['activity'] = [];
          return responseData;
        }
      )
      .then(
        responseData => {
          return Locations.getUserLocation(id)
        }
      )
      .then(
        rows => {
          responseData['location'] = rows[0] || {};
          return responseData
        },
        err => {
          console.error(err);
          responseData['location'] = {};
          return responseData;
        }
      )
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
    `;
    return new Promise((resolve, reject) => {
      pool.query('SELECT user_fullName FROM user WHERE user_id = ?', id, (err, rows) => {
        if (err) reject(err);
        resolve(rows[0])
      })
    })
    .then(
      row => {
        if (row['user_fullName']) {
          let [firstName, lastName] = row['user_fullName'].split(':');
          let newFullName = null;
          firstName = data.firstName || firstName;
          lastName = data.lastName || lastName;
          newFullName = `${firstName}:${lastName}`;
          if (newFullName) {
            return new Promise((resolve, reject) => {
              pool.query(sql, [newFullName, id], (err, result) => {
                if (err) reject(err);
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
  static updateUserLocation (data) {
    return Locations.updateUserLocation(data)
  }

  /**
   *
   * @param userId
   * @param text
   * @returns {Promise}
   */
  static updateUserAbout (userId='', text='') {
    if (userId !== '' && text !== '') {
      let sql = `
      UPDATE user
      SET user_about = ?
      WHERE user_id = ?;
      `;
      let inserts = [text, userId];
      return new Promise((resolve, reject) => {
        pool.query(sql, inserts, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    }
  }
  static updateStatus (userId='', text='') {
    if (userId !== '' && text !== '') {
      let sql = `
      UPDATE user
      SET user_status = ?
      WHERE user_id = ?;
      `;
      let inserts = [text, userId];
      return new Promise((resolve, reject) => {
        pool.query(sql, inserts, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    }
  }
}
module.exports = User;
