"use strict";

const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api/v1/user/:id/profile', controllers.user.getUserProfile);
