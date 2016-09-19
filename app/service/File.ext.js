"use strict";
const fs = require('fs');

class File{
  checkImagesDir(formConfig, formParser){
    fs.exists(formConfig.path, function(exists){
      if(exists){
        formParser();
      } else{
        fs.mkdir(formConfig.path, function(err){
          if(err){
            console.error(err)
          }else {
            formParser();
          }
        })
      }
    })
  }
}

module.exports = File;
