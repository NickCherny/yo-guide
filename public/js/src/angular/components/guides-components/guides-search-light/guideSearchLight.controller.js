class GuideSearchLightCtrl {
  constructor (ServerRequests) {
    this.text = '';
    this.searchGuidesLocation = ServerRequests.searchGuidesLoaction;
  }
  clearValue () {
    this.text = '';
  };
  searchGuideKey (e) {
    if (e.keyCode === 13 && this.text.length !== 0) {
      location.assign(`/guides/search/location/${this.text}`);
      this.searchGuidesLocation(this.text)
        .then(
          response => {
            if (response.status === 200) {

            }
          },
          err => {
            console.log(err)
          }
        );
      this.clearValue();
    }
  }
}
export default GuideSearchLightCtrl;
