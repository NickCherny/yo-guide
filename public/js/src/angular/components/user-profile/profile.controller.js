class profileCtrl {
  constructor ($scope, $cookies, serverRequests) {
    this.id = $cookies.get('userId');
    this.userId;
    this.cabinetState;
    this._scope = $scope;
    this.defaultUserData = {};
    serverRequests.getUserInfo(this.userId || this.id)
      .then(
        response => {
          if (response.status === 200) {
            this.user = response.data;
            this.userMedia = {
              photo: {
                src: this.user.photo,
                alt: this.user.fullName
              },
              fullName: this.user.fullName
            }
            this._scope.$emit('userInfo', this.user);
            console.log(this.userMedia)
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
