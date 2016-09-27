'use strict'
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const compress = require('compression')
const methodOverride = require('method-override')
const http = require('http')
const engine = require('ejs-locals')
const passport = require('passport')

module.exports = (app, config) => {
  let env = process.env.NODE_ENV || 'development'
  app.locals.ENV = env
  app.locals.ENV_DEVELOPMENT = env == 'development'

  app.locals.title = 'Гиды, туры, путешествия'
  app.locals.auth = false
  app.locals.imagesDir = (env === 'development') ? '/images' : '/images-bundle'

  app.use(favicon(`${config.root}/public/images/favicon.ico`));
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  // Set cookies parser session
  app.use(cookieParser())
  app.use(session({
    keys: ['secret']
  }))

  // Initialize passport
  app.use(passport.initialize())
  app.use(passport.session())

  const strategy = require('../app/service/').Strategy
  passport.use(strategy.adminLogin())

  let user = passport.authenticate('local', {
    successRedirect: '/cabinet',
    failureRedirect: '/user/registration'
  })

  app.post('/user/login', user)

  let mustBeAuthenticated = function (req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/')
  }
  app.all('/cabinet', mustBeAuthenticated)
  app.all('/cabinet/*', mustBeAuthenticated)

  passport.serializeUser(function (data, done) {
    done(null, data.username)
  })
  passport.deserializeUser(function (id, done) {
    done(null, {username: id})
  })

  app.use(compress())
  app.use(express.static(config.root + '/public'))
  app.use(methodOverride())

  app.engine('ejs', engine)
  app.set('views', config.root + '/app/views')
  app.set('view engine', 'ejs')

  const ROUTER = require('../app/router')
  app.use('/', ROUTER)

  app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500)
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      })
    })
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
      res.render('partial/error/index', {
        message: err.message,
        error: {},
        title: 'Страница не найдена'
      })
  })

  http.createServer(app).listen(config.port || 9090, function () {
    console.log(`Server Listen in : ${config.port}`)
  })
}
