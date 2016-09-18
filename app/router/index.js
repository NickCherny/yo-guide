"use strict";
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCtrl');
const cabinetController = require('../controllers/cabinetCtrl');
const staticPagesController = require('../controllers/staticPagesCtrl');
const guidesController = require('../controllers/guidesCtrl');
const restAPI = require('../controllers/restAPI');

router.all('/', staticPagesController.main);

router.all('*', (req, res, next)=>{
  res.locals.auth = req.isAuthenticated();
  next();
});

/**
 * @router /about
 */
router.get('/about', staticPagesController.aboutUs);
router.get('/about/about-us', staticPagesController.aboutUs);
router.get('/about/founders', staticPagesController.aboutFounders);

/**
 * @router /regulations
 */
router.get('/regulations', staticPagesController.regulations);

/**
 * @router /
 */
router.post('/api/v1/login/user', userController.loginUser);
router.get('/api/v1/logout/user', userController.logoutUser);
router.get('/login/cabinet', userController.registrationUser);
router.post('/api/v1/registration/user', userController.registrationUser);

/**
 * @router /cabinet/*
 */
router.get('/cabinet', cabinetController.home);

/**
 * @router /guides/*
 */
router.get('/guides', guidesController.guidesBoard);

/**
 * @router /api
 */
router.get('/api/v1/regulations/regular/:name', restAPI.regulationsController);

module.exports = router;
