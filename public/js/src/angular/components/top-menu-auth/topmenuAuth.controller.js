class topmenuAuthCtrl {
  constructor ($scope, $cookies, ROUTER_URL, serverRequests) {
    this._scope = $scope
    this.ROUTER_URL = ROUTER_URL
    this.guideState
    this.userId = $cookies.get('userId');
    this._defaultUserData = {};
    this.user
    serverRequests.getUserInfo(this.userId)
      .then(
        response => {
          if (response.status === 200) {
            this.user = response.data;
            console.log(this.user)
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
export default topmenuAuthCtrl
