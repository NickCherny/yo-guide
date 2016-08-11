const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

class Form{
  formParse(req, res, formConfig, callback){
    let form = new formidable.IncomingForm();
    form.uploadDir = formConfig.path || '';
    form.maxFieldsSize = formConfig.maxFields || (2 * 1024 * 1024);
    form.keepExtensions = formConfig.keepExtensions || true;

    form.on('field', function(field, value){});
    form.on('file', function(name, file){
      if(file.type.search(formConfig.type) !== -1){
        fs.rename(file.path, path.join(formConfig.path,file.name), function(err){
          if(err){
            console.error(err);
          }
          callback(null ,file.name);
        })
      }else {
        fs.unlink(file.path, function(err){
          if(err) console.error(err);
        })
      }
    });
    form.on('progress', function(received, expected){
      let percentLoader = Math.floor(received / expected * 100);
      // console.log(percentLoader);
    });
    form.on('end', () => res.end());
    form.parse(req);
  }
}

module.exports = Form;
