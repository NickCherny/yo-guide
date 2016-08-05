const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.pages.getTasks();
  res.render('index', {
    title: 'Yo-Guide-Web MVC',
    articles: ''
  });
});
