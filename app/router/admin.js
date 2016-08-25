"use strict";

const express = require('express');
const router = express.Router();
const db = require('../models/index');
const md5 = require('md5');
const controllers = require('../controllers');

module.exports = function (app) {
  app.use('/', router);
};

// GET login/*
router.get('/login/admin', function(req, res){
  res.render('admin/login_admin', {title: 'Войти в кабинет'});
  res.end();
});
router.get('/logout/admin', function(req, res){
  req.logout();
  res.redirect('/');
});

// GET admin/home
router.get('/admin', function(req, res){
  res.render('admin/admin_home', {title: 'Кабинет', typePage: 'Главная страница'});
  res.end();
});

// GET control/*
router.get('/admin/control/projects', function(req, res){
  res.render('admin/projects/admin_projects', {title: 'Управление проектами', typePage: 'Проекты'});
  res.end();
});

function isFormData(req){
  let type = req.headers['content-type'] || '';
  return 0 == type.indexOf('multipart/form-data');
}
router.post('/admin/project/add', function(req, res){
  if(!isFormData(req)){
    res.status(400);
    res.send('Bad Request');
    res.end();
  }else {
    controllers.project.addProject(req, res);
  }
});






router.get('/session', function(req, res){
  if(req.cookies.remember){
    res.render('session', {title: 'd', remember: true});
    res.end();
  }else{
    res.render('session', {title: 'd', remember: false});
    res.end();
  }
});
router.post('/remember', function(req, res){
  if(req.body.remember){
    res.cookie('remember', 1, {maxAge: 60 * 1000});
  }
  res.redirect('back');
});

router.get('/forget', function(req, res){
  res.clearCookie('remember');
  res.redirect('/session');
});
