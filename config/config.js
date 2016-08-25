"use strict";
const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yo-guide-web'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 20,
      host: 'localhost',
      user: 'nick',
      password: '',
      database: 'yo_db',
      queueLimit: 10,
      acquireTimeout: 10000
    },
    adminImagesPaths: {
      projects: '/public/images/projects',
      user: '/public/images/user'
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'yo-guide-web'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 20,
      host: '127.0.0.1',
      user: 'root',
      password: '3150061Asd',
      database: 'yo_db',
      queueLimit: 10,
      acquireTimeout: 10000
    },
    adminImagesPaths: {
      projects: '/public/images/projects',
      user: '/public/images/user'
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'yo-guide-web'
    },
    port: process.env.PORT || 3000,
    db: {
      connectionLimit: 40,
      host: '127.0.0.1',
      user: 'root',
      password: '3150061Asd',
      database: 'yo_db',
      queueLimit: 20,
      acquireTimeout: 20000
    },
    adminImagesPaths: {
      projects: '/public/images/projects',
      user: '/public/images/user'
    }
  }
};

module.exports = config[env];
