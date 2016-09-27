class profileCtrl {
  constructor ($cookies, serverRequests) {
    this.id = $cookies.get('userId')
  }
}
export default profileCtrl
