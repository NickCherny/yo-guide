class UserMediaCtrl {
  constructor ($cookies, serverRequests) {
    this.id = $cookies.get('userId')
    this.photo = {
      src: '/images/users/01/profile/user_profile.png',
      alt: this.fullName
    }
    serverRequests.getUserProfile(this.id)
      .then(
        result => {
          if (result.status === 200) {
            this.data = result.data
          }
        }
        , err => {
          if (err) console.log(err)
        })
  }
}
export default UserMediaCtrl
