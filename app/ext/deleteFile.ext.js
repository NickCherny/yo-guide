'use strict';
const fs = require('fs');
/**
 *
 * @param {string} fileName - file name
 * @param {string} dir - direction user files
 * @returns {Promise}
 */
module.exports = function(fileName='not', dir='not') {
  if (fileName === 'not' || dir === 'not') return;
  return new Promise((resolve, reject) => {
    fs.unlink(`${dir}/${fileName}`, err => {
      if (err) reject(err);
      resolve({message: `delete file: ${fileName}`})
    })
  })
};
