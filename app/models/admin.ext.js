"use strict";
const pool = require('./connect');
const path = require('path');

class AdminRequests{
  constructor(){}
  getNamePassword(callback){
    // return pool.query("SELECT admin_login, admin_password FROM admin", callback);
    callback(null, {
      admin_login: 'nick',
      admin_password: '123'
    });
  }
  setProject(data, callback){
    let sql = `INSERT INTO project (project_title, project_description, project_photo, project_type) 
    VALUES (${data.title}, ${data.text}, ${data.photo}, ${data.type})`;
    console.log(sql);
  }
}
module.exports = AdminRequests;
