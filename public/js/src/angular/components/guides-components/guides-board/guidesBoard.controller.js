class GuidesBoardCtrl {
  constructor ($location, $scope, ServerRequests) {
    this.test = 'Гиды!!!';
    this.guides = [];
    this.searchText = $location.search().text;
    ServerRequests.searchGuidesLoaction(this.searchText)
      .then(
        response => {
          if (response.status === 200) {
            this.guides = response.data;
            console.log(this.guides)
          }
        },
        err => {}
      )

    $scope.$on('resultSearchGuide', (e, data) => {
      this.guides = data;
    })
  }
}
export default GuidesBoardCtrl;
