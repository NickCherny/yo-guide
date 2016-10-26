'use strict';
const express = require('express');
const router = express.Router();
const facade = require('../facade');

/**
* @url /
*/
router.all('/', facade.main.main);
router.all('*', (req, res, next) => {
  res.locals.auth = req.isAuthenticated();
  next()
});

/**
 * @url /about
 */
router.get('/about', facade.about.aboutUs);
router.get('/about/us', facade.about.aboutUs);
router.get('/about/founders', facade.about.aboutFounders);

/**
 *
 * Account
 * @url /user
 */
router.get('/user/registration', facade.account.showRegistrationForm);
router.post('/user/registration', facade.account.registrationUser);
router.post('/user/login', facade.account.loginUser);
router.get('/user/logout', facade.account.logoutUser);

/**
 * @url /regulations
 */
router.get('/regulations', facade.main.regulations);

/**
 * @url /contact
 */
router.get('/contact', facade.main.contact);
router.post('/contact', facade.main.contact);

/**
 * @url /cabinet/*
 */
router.get('/cabinet', facade.cabinet.home);
router.post('/cabinet/user/:id/settings/update', facade.cabinet.updateProfile);
router.post('/cabinet/user/:id/settings/photo/upload', facade.cabinet.uploadPhoto);
router.post('/cabinet/user/:id/settings/photo/:name/delete', facade.cabinet.deletePhoto);
router.get('/cabinet/user/:id/profile', facade.cabinet.userInfo);
router.get('/cabinet/user/:id/guest/all', facade.cabinet.userGuests);
router.get('/cabinet/user/:id/travel/all', facade.cabinet.userTravels);
router.get('/cabinet/user/:id/messages', facade.cabinet.showUserMessages);

/**
 * @url /guides/*
 */
router.get('/guides', facade.guides.guidesBoard);
router.get('/guides/search/location/', facade.guides.guidesBoard);
router.get('/guides/api/search/location/:text', facade.guides.searchLocation);
router.get('/guide/search/location/not/activity/:activity', facade.guides.searchGuide);
router.get('/guide/:id/profile', facade.guides.getGuideProfile);

/**
 * @url /user
 */
router.get('/user/:id/profile', facade.guides.getGuideProfile);
router.get('/user/:id/profile/info', facade.user.getUserProfile);
router.get('/user/forgot/password', facade.user.forgotPassword);

/**
 * @url /admin
 */
router.get('/admin', facade.admin.form);
router.get('/admin/home', facade.admin.home);
router.post('/login/admin', facade.admin.login);
router.get('/logout/admin', facade.admin.logout);


// test
// todo: !!!
router.get('/success', facade.main.success);


module.exports = router;
