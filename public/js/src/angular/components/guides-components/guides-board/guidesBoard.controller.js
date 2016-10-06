class GuidesBoardCtrl {
  constructor (ServerRequests) {
    this.test = 'Гиды!!!';
    this.guides = [];
    ServerRequests.searchGuidesLoaction('минск')
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
