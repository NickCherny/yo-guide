"use strict";
const config = require('../../config/config');
const mysql = require('mysql');
let env = process.env.NODE_ENV || 'development';

const pool = mysql.createPool({
  connectionLimit: config.db.connectionLimit,
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  queueLimit: config.db.queueLimit,
  acquireTimeout: config.db.acquireTimeout
});

module.exports = pool;
