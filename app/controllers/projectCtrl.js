"use strict";

const path = require('path');
const services = require('../service');
const models = require('../models');
const imagesPaths = require('../../config/config').adminImagesPaths;
class ProjectCtrl{
  addProject(req, res){
    let formConfig = {
      path: path.join(process.cwd(), imagesPaths.projects),
      maxFields: '',
      keepExtensions: true,
      type: /images|jpeg|png/i
    };
    services.Abserver.on('done', function(){
      console.log('сработало событие')
    });

    services.File.checkImagesDir(formConfig, function(){
      services.Form.formParse(req, res, formConfig, function(err, formData){
        if(err){
          console.error(err)
        }else {
          services.Abserver.say();
          let data = {
            title: formData.fields.title,
            text: formData.fields.text,
            photo: path.join(imagesPaths.projects, formData.file),
            type: formData.fields.projectType
          };
          models.admin.setProject(data);
        }
      })
    })
  }
}
module.exports = ProjectCtrl;
