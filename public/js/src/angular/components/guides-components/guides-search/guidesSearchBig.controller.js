/**
 * @class
 */
class GuidesSearchBigCtrl {
  constructor ($location, $scope, ServerRequests) {
    this.locationText = undefined;
    this.searchLocation = ServerRequests.searchGuidesLoaction
    this.scope = $scope;
    this._location = $location;
  }

  searchGuideLocation () {
    if ( typeof this.locationText !== 'undefined') {
      this.updateLocation(this.locationText);
      this.searchLocation(this.locationText)
        .then(
          response => {
            if (response.status === 200) {
              let guides = (response.data instanceof Array) ? response.data : [response.data];
              this.scope.$emit('resultSearchGuide', guides);
            } else {
              this.scope.$emit('resultSearchGuide', []);
            }
          },
          err => {
            this.scope.$emit('resultSearchGuide', []);
            console.log(err)
          }
        )
      this.locationText = undefined;
    }
  }
  updateLocation (location) {
    this._location.search('text', location)
  }

}
export default GuidesSearchBigCtrl;
