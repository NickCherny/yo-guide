class UserMediaCtrl {
  constructor ($cookies) {
    this.id = $cookies.get('userId')
    this.userInfo = {}
    this.cabinetState
  }
}
export default UserMediaCtrl
