const Form = require('./Form.ext');
const File = require('./File.ext.js');

const services = {
  Form: new Form(),
  File: new File()
};

module.exports = services;
