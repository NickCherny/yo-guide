'use strict'
const join = require('path').join;
const formidable = require('formidable');
const fs = require('fs');

/**
 *
 * @param {object} req - HTTP Request
 * @param {string} id - user id
 * @return {Promise}
 */
module.exports = function (req, id='not') {
  /**
   * @description - declaration of variables
   */
  const root = process.cwd();
  const userDir = join(root, `/public/images/users/user_${id}`);

  /**
   *
   * @param {object} req - HTTP Request
   * @param {string} userDir - user images direcory
   * @returns {Promise}
     */
  function parseForm (req, userDir) {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.uploadDir = userDir;
      form.maxFieldsSize = 1024 * 2;

      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        if (files.file.type.search(/image/i) !== -1) {
          fs.rename(files.file.path, `${userDir}/${files.file.name}`, (err) => {
            if (err) reject({message: err});
            resolve({
              name: files.file.name,
              src: `${userDir}/${files.file.name}`
            })
          })
        } else {
          fs.unlink(files.file.path);
          reject({message: ''})
        }
      })
    })
  }

  /**
   *
   * @param {string} userDir - user images direction
   * @returns {Promise}
     */
  function createUserDir (userDir='not') {
    return new Promise((resolve, reject) => {
      if (userDir === 'not') reject({message: 'not passed userDir'});
      fs.mkdir(userDir, (err) => {
        if (err) reject({message: err});
        resolve(userDir)
      })
    })
  }

  if (fs.existsSync(userDir)) {
    return parseForm(req, userDir)
  } else {
    createUserDir(userDir)
      .then(
        userDir => {
          return parseForm(req, userDir)
        },
        err => {
          console.error(err)
        }
      )
  }
};
