"use strict";
const express = require('express');
const config = require('./config/config');
const app = express();

require("babel-core").transform(require('./config/express')(app, config), {
  ignore: ['node_modules']
});
