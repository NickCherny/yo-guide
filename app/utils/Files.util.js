const fs = require('fs');
const formidable = require('formidable');
const join = require('path').join;

/**
 *
 * @class Files
 */
class Files {
  /**
   *
   * @constructor
   * @param {string} id - user id
   */
  constructor (id='not') {
    this._root = process.cwd();
    this._userId = id;
  }

  /**
   *
   * @param {string} userDir - user images direction
   * @returns {Promise}
   */
  createUserDir (userDir=this._userId || 'not') {
    return new Promise((resolve, reject) => {
      if (userDir === 'not') reject({message: 'not passed userDir'});
      fs.mkdir(userDir, err => {
        if (err) reject({message: err});
        resolve(userDir)
      })
    })
  }

  /**
   *
   * @param {object} req - HTTP Request
   * @param {string} userDir - user images direcory
   * @returns {Promise}
   */
  parseForm (req, userDir) {
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
              src: `${`/images/users/user_${this._userId}`}/${files.file.name}`
            })
          })
        } else {
          fs.unlink(files.file.path, err => {
            if (err) reject(err);
            reject({message: ''})
          });
        }
      })
    })
  }

  /**
   *
   * @param req
   * @param userId
   * @returns {Promise}
   */
  uploadPhoto (req, userId=this._userId) {
    const userDir = join(this._root, `/public/images/users/user_${userId}`);

    if (fs.existsSync(userDir)) {
      return this.parseForm(req, userDir)
    } else {
      return this.createUserDir(userDir)
        .then(
          userDir => {
            console.log('create dir');
            return this.parseForm(req, userDir)
          },
          err => {
            console.error(err)
          }
        )
        .catch(err => console.error(err))
    }
  }

  /**
   *
   * @param name
   * @param dir
   * @returns {Promise}
   */
  deleteImage (name='not', dir='not') {
    if (fileName === 'not' || dir === 'not') return;
    return new Promise((resolve, reject) => {
      fs.unlink(`${dir}/${fileName}`, err => {
        if (err) reject(err);
        resolve({message: `delete file: ${fileName}`})
      })
    })
  }
}
module.exports = Files;
