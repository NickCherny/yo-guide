const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = function (app) {
  app.use('/', router);
};

router.all('/', controllers.main.load);

router.post('/api/v1/login/user', controllers.user.loginUser);
router.get('/api/v1/logout/user', controllers.user.logoutUser);
router.get('/login/cabinet', controllers.user.registrationUser);
// router.post('/api/v1/login/admin', controllers.admin.loginAdmin);
// router.get('/api/v1/logout/user', controllers.user.logoutUser);
// router.get('/api/v1/logout/admin', controllers.user.logoutAdmin);
//
// router.post('/api/v1/registration/user', controllers.user.registrationUser);
