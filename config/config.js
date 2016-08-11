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
      user: 'root',
      password: '',
      database: 'yo_web',
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
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'yo_web',
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
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'yo_web',
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
