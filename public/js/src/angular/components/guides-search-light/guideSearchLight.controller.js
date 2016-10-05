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
      this.searchGuidesLocation(this.text)
        .then(
          response => {
            if (response.status === 200) {
              console.log(response)
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
