const express = require('express');
const router = express.Router();
const db = require('../models');
const md5 = require('md5');
const formidable = require('formidable');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login/admin', function(req, res){
  res.render('admin', {title: 'Войти в кабинет'});
  res.end();
});
router.get('/admin', function(req, res){
  res.render('admin_home', {title: 'Кабинет', user: req.user.username});
  res.end();
});
router.get('/logout/admin', function(req, res){
  req.logout();
  res.redirect('/');
});
function isFormData(req){
  let type = req.headers['content-type'] || '';
  return 0 == type.indexOf('multipart/form-data');
}
router.post('/admin/project/new', function(req, res){
  if(!isFormData(req)){
    res.status(400);
    res.send('Bad Request');
    res.end();
  }else {
    const path = require('path');
    const fs = require('fs');
    const mv = require('mv');
    let form = new formidable.IncomingForm();
    // закончена получение всех данныех с формы
    form.on('field', function(field, value){});
    // закончено получения файла с формы
    form.on('file', function(name, file){
      form.uploadDir = "/my/dir";
      mv(file.path, path.join(__dirname, '/public/images/project/proPhoto_0001'), function(err){
        if(err) console.error(err);
      })
    });
    // уровень загрузки
    form.on('progress', function(received, expected){
      let percentLoader = Math.floor(received / expected * 100);
      // console.log(percentLoader);
    });
    form.on('end', function(){
      res.end();
    });
    form.parse(req);
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
