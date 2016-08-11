const express = require('express');
const router = express.Router();
const db = require('../models');
const debug = require('../ext/debug.ext');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.pages.getTasks();
  res.render('main', {title: 'Главная'}, function(err, html){
    if(err){
      debug.ctrlError(err, req, res, 400, '/');
    }else {
      res.status(200).send(html);
      res.end();
    }
  })
});
router.get('/react', function(req, res, next){
  res.render('react', {title: 'React'}, function(err, html){
    if(err){
      debug.ctrlError(err, req, res, 400, '/')
    }else {
      res.status(200).send(html);
      res.end();
    }
  });
});
