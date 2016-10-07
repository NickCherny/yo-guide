class GuidesBoardCtrl {
  constructor (ServerRequests) {
    this.test = 'Гиды!!!';
    this.guides = [];
    console.log(location)
    ServerRequests.searchGuidesLoaction('вильнюс')
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
