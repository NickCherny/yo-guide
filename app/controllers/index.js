"use strict";

const Admin = require('./adminCtrl');
const User = require('./userCtrl');
const Cabinet = require('./cabinetCtrl');
const Travel = require('./travelCtrl');
const Tour = require('./tourCtrl');
const Guest = require('./guestCtrl');
const ProjectCtrl = require('./projectCtrl');

const controllers = {
  admin: new Admin(),
  user: new User(),
  cabinet: new Cabinet(),
  travel: new Travel(),
  tour: new Tour(),
  guest: new Guest(),
  project: new ProjectCtrl()
};

module.exports = controllers;
