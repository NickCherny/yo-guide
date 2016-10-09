/**
 * @class
 */
class GuidesSearchBigCtrl {
  constructor ($scope, ServerRequests) {
    this.locationText = undefined;
    this.searchLocation = ServerRequests.searchGuidesLoaction
    this.scope = $scope;
  }

  searchGuideLocation () {
    if ( typeof this.locationText !== 'undefined') {
      this.searchLocation(this.locationText)
        .then(
          response => {
            if (response.status === 200) {
              this.scope.$emit('resultSearchGuide', response.data);
            }
          },
          err => {
            console.log(err)
          }
        )
      this.locationText = undefined;
    }
  }

}
export default GuidesSearchBigCtrl;
