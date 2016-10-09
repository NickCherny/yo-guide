const _ = require('lodash');
module.export = function (str) {
  return _.trim(_.escape(_.toLower(str)))
};
