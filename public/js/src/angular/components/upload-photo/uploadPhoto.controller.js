class UploadPhotoCtrl {
  constructor ($scope) {
    this.photoData = null;

    $scope.$on('uploadFile', (e, data) => {
      this.photoData = data
    })
  }
}
export default UploadPhotoCtrl;
