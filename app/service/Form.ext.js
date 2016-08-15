const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const imagesPaths = require('../../config/config').adminImagesPaths;

class Form{
  formParse(req, res, formConfig, callback){
    let self = this;
    let form = new formidable.IncomingForm();
    form.uploadDir = formConfig.path || '';
    form.maxFieldsSize = formConfig.maxFields || (2 * 1024 * 1024);
    form.keepExtensions = formConfig.keepExtensions || true;

    form.on('file', function(name, file){
      if(file.type.search(formConfig.type) !== -1){
        fs.rename(file.path, path.join(formConfig.path,file.name), function(err){
          if(err){
            console.error(err);
          }
        })
      }else {
        fs.unlink(file.path, function(err){
          if(err) console.error(err);
        })
      }
    });
    form.on('end', function () {
      res.redirect('back');
      res.end();
    });
    form.parse(req, function(err, fields, files){
      if(err){
        callback(err);
      }else {
        callback(null, {fields: fields, file: files.file.name});
      }
    });
  }
}

module.exports = Form;
