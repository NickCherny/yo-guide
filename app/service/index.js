"use strict";

const Form = require('./Form.ext');
const File = require('./File.ext');
const Strategy = require('./Passport.Strategy.ext');
const Abserver = require('./Abserver');

const services = {
  Form: new Form(),
  File: new File(),
  Strategy: new Strategy(),
  Abserver: new Abserver()
};

module.exports = services;
