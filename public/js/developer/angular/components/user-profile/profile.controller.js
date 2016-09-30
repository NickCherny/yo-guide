class profileCtrl {
  constructor ($cookies, serverRequests) {
    this.id = $cookies.get('userId');
    this.defaultUserData = {};
    serverRequests.getUserInfo(this.id)
      .then(
        response => {
          if (response.status === 200) {
            this.user = response.data;
          } else {
            this.user = this._defaultUserData
          }
        },
        err => {
          console.log(err);
          this.user = this._defaultUserData
        }
      )
  }
}
export default profileCtrl
