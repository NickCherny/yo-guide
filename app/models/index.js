"use strict";
const Admin = require('./admin.ext');
const User = require('./user.model');

const db = {
  admin: new Admin(),
  user: new User()
};
module.exports = db;
