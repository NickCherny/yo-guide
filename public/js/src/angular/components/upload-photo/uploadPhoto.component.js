import UploadPhotoCtrl from './uploadPhoto.controller';
const uploadPhotoDefinition = {
  controller: UploadPhotoCtrl,
  controllerAs: 'upPhoto',
  bindings: {
    photoData: '<'
  },
  template: `
    <div class="row row-fix">
      <div ng-hide="upPhoto.photoData">
        <input type="file" class="input" id="photo" upload-file>
      </div>
      <div ng-show="upPhoto.photoData">
        <div class="wrapper wrapper__upload-photo"><img ng-src="{{upPhoto.photoData.src}}" alt="upPhoto.photoData.name" class="images__upload-photo"></div>
        <div class="photo-name">{{upPhoto.photoData.name}}</div>
      </div>
    </div>
  `
};
export default uploadPhotoDefinition;
