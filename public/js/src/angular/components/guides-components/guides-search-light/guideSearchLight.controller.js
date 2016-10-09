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
      let text = String(this.text.toLowerCase());
      location.assign(`/guides/search/location/#?text=${this.text}`);
      this.clearValue();
    }
  }
  searchGuide (e) {
    if (this.text.length > 0) {
      location.assign(`/guides/search/location/#?text=${this.text}`);
      this.clearValue();
    }
  }
}
export default GuideSearchLightCtrl;
