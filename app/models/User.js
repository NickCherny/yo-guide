const md5 = require('md5');
const pool = require('./connect');

class User{

  /**
   *
   * @param {object} data - user data
   * @param {function} callback - callback function
     */
  static selectUIdUEmailUPassword(data, callback){
    let sql = `
      SELECT user_id 
      FROM user 
      WHERE user_email = ? AND user_password = ?;
    `;
    let inserts = [
      data.email,
      md5(data.password)
    ];
    pool.query(sql, inserts, callback);
  }

  /**
   *
   * @param {object} data - user data => email
   * @param {function} callback - callback function
   */
  static isUser(data, callback){
    let sql = `
      SELECT COUNT(*) as u 
      FROM yo_db.user 
      WHERE user_email = ?
    `;
    let inserts = [
      data.email || ''
    ];
    pool.query(sql, inserts, (err, result)=>{
      if(err) return callback(err);

      if(result[0]['u'] === 0){
        callback(null);
      }else {
        callback('пользователь существует');
      }
    })
  }

  /**
   *
   * @param {object} data - user data => fullName, email, password
   * @param {function} callback - callback function
     */
  static registrationUser(data, callback){
    this.isUser(data, function(err){
      if(err) return callback(err);

      let sql = `
        INSERT INTO user 
        (user_fullName, user_email, user_password) 
        VALUES(?, ?, ?);
      `;

      let inserts = [
        `${data.firstName || ''}:${data.lastName || ''}`,
        data.email || '',
        md5(data.password || '')
      ];
      pool.query(sql, inserts, callback)
    });
  }
}
module.exports = User;
