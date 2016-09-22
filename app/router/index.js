'use strict'
const express = require('express')
const router = express.Router()
const facade = require('../facade')

/**
* @url /
*/
router.all('/', facade.main.main)
router.all('*', (req, res, next) => {
  res.locals.auth = req.isAuthenticated()
  next()
})

/**
 * @url /about
 */
router.get('/about', facade.main.aboutUs)
router.get('/about/about-us', facade.main.aboutUs)
router.get('/about/founders', facade.main.aboutFounders)
router.get('/user/registration', facade.main.showRegistrationForm)

/**
 * @url /regulations
 */
router.get('/regulations', facade.main.regulations)

/**
 * @url /contact
 */
router.get('/contact', facade.main.contact)
router.post('/contact/send', facade.main.contact)

/**
 * @url /
 */
router.post('/api/v1/login/user', facade.user.loginUser)
router.get('/api/v1/logout/user', facade.user.logoutUser)
router.get('/login/cabinet', facade.user.registrationUser)
router.post('/api/v1/registration/user', facade.user.registrationUser)

/**
 * @url /cabinet/*
 */
router.get('/cabinet', facade.cabinet.home)

/**
 * @url /guides/*
 */
router.get('/guides', facade.guides.guidesBoard)

/**
 * @url /api
 */
router.get('/api/v1/regulations/regular/:name', facade.api.regulationsController)
router.get('/api/v1/user/:id/profile', facade.api.userInfo)
router.get('/api/v1/user/:id/guest/all', facade.api.userGuests)
router.get('/api/v1/user/:id/travel/all', facade.api.userTravels)

module.exports = router
