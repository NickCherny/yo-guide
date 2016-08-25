const pool = require('./connect');
const md5 = require('md5');

class User{
  registrationUser(data, callback){
    this.isUser(data, function(){
      let sql = 'INSERT INTO user (user_fullName, user_email, user_password) VALUES(?, ?, ?)';
      let inserts = [
        `${data.firstName || ''}:${data.lastName || ''}`,
        data.email || '',
        md5(data.password || '')
      ];
      pool.query(sql, inserts, callback)
    });
  };
  isUser(data, callback){
    let sql = 'SELECT COUNT(*) as u FROM yo_db.user WHERE user_email = ?';
    let inserts = [
      data.email || ''
    ];
    pool.query(sql, inserts, (err, result)=>{
      if(err){
        console.error(err);
        return false;
      }else {
        if(result[0]['u'] === 0){
          callback();
        }else {
          return 'Пользователь существует';
        }
      }
    })
  }
  getTest(callback){
    pool.query("SELECT * FROM user", callback);
  }
  getUserId(data, callback){
    let sql = 'SELECT user_id FROM yo_db.user WHERE user_email = ? ';
    console.log(data);
    let inserts = [
      data.email || '',
    ];
    pool.query(sql, inserts, callback)
  }
  checkUserLoginPassword(data, callback){
    let sql = "SELECT user_id FROM user WHERE user_email = ? AND user_password = ?;";
    let inserts = [
      data.email || '',
      md5(data.password || '')
    ];
    pool.query(sql, inserts, callback);
  };
  getFullUserName(id, callback){
    console.log('SQL')
  }
}
module.exports = User;
