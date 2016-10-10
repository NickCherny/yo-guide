class TopMenuAuthExternalCtrl {
  constructor ($cookies, serverRequests) {
    this.authList
    this.guideState
    this.userId = $cookies.get('userId');
    this._defaultUserData = {};
    this.user
    serverRequests.getUserInfo(this.userId)
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
export default TopMenuAuthExternalCtrl;
