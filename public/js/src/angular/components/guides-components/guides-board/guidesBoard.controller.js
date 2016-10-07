class GuidesBoardCtrl {
  constructor ($location, ServerRequests) {
    this.test = 'Гиды!!!';
    this.guides = [];
    this.searchText = $location.search().text;
    $location.url('');
    ServerRequests.searchGuidesLoaction(this.searchText)
      .then(
        response => {
          if (response.status === 200) {
            this.guides.push(response.data);
            console.log(this.guides)
          }
        },
        err => {}
      )
  }
}
export default GuidesBoardCtrl;
