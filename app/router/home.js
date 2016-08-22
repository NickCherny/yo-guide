"use strict";

const express = require('express');
const router = express.Router();
const db = require('../models/index');

module.exports = function (app) {
  app.use('/', router);
};

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