"use strict";
// $ NODE_ENV=development npm start
// $ NODE_ENV=production npm start

const express = require('express');
const config = require('./config/config');
const app = express();

if(process.env.NODE_ENV !== 'production'){
  require("babel-core").transform(require('./config/express')(app, config), {
    ignore: ['node_modules']
  });
} else {
  require('./config/express')(app, config)
}
