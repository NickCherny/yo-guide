"use strict";
const Pages = require('./pages.ext');
const Admin = require('./admin.ext');

const db = {
  pages: new Pages(),
  admin: new Admin()
};
module.exports = db;
