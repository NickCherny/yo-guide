"use strict";
const pool = require('./connect');

class AdminRequests{
  constructor(){}
  getNamePassword(callback){
    // return pool.query("SELECT admin_login, admin_password FROM admin", callback);
    callback(null, [{
      admin_login: 'nick',
      admin_password: '123'
    }]);
  }
}
module.exports = AdminRequests;

