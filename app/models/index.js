"use strict";
const Pages = require('./pages.ext');
const Admin = require('./admin.ext');
const User = require('./user.model');

const db = {
  pages: new Pages(),
  admin: new Admin(),
  user: new User()
};
module.exports = db;
