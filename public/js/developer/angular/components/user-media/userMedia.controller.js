class UserMediaCtrl {
  constructor ($cookies) {
    this.id = $cookies.get('userId')
    this.userInfo = {}
  }
}
export default UserMediaCtrl
