class CabinetHomeCtrl {
  constructor ($cookies, serverRequests) {
    this.id = $cookies.get('userId');
    this._defaultUserData = {};
    serverRequests.getUserInfo(this.id)
      .then(
        response => {
          if (response.status === 200) {
            this.user = response.data;
            console.log(this.user)
            this.userMedia = {
              photo: {
                src: this.user.photo,
                alt: this.user.fullName
              },
              fullName: this.user.fullName
            };
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
export default CabinetHomeCtrl;
