const _ = require('lodash');
module.exports = function (str) {
  return _.trim(_.escape(_.toLower(str)))
};
