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
    services.File.checkImagesDir(formConfig, function(){
      services.Form.formParse(req, res, formConfig, function(err, name){
        if(err){
          console.error(err)
        }else {
          models.admin.setPhotoProject(name);
        }
      })
    })
  }
}
module.exports = ProjectCtrl;
