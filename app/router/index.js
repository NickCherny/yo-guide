'use strict'
const express = require('express')
const router = express.Router()
const facade = require('../facade')

router.all('/', facade.main.main)
router.all('*', (req, res, next) => {
  res.locals.auth = req.isAuthenticated()
  next()
})

/**
 * @router /about
 */
router.get('/about', facade.main.aboutUs)
router.get('/about/about-us', facade.main.aboutUs)
router.get('/about/founders', facade.main.aboutFounders)

/**
 * @router /regulations
 */
router.get('/regulations', facade.main.regulations)

/**
 * @router /
 */
router.post('/api/v1/login/user', facade.user.loginUser)
router.get('/api/v1/logout/user', facade.user.logoutUser)
router.get('/login/cabinet', facade.user.registrationUser)
router.post('/api/v1/registration/user', facade.user.registrationUser)

/**
 * @router /cabinet/*
 */
router.get('/cabinet', facade.cabinet.home)

/**
 * @router /guides/*
 */
router.get('/guides', facade.guides.guidesBoard)

/**
 * @router /api
 */
router.get('/api/v1/regulations/regular/:name', facade.api.regulationsController)

module.exports = router
