'use strict'
const _ = require('lodash');
module.exports = function (str) {
  return _.trim(_.escape(str))
};
