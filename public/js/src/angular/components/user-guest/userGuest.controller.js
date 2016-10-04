class userGuestCtrl {
  constructor ($cookies, ServerRequests) {
    this.id = $cookies.get('userId')
    ServerRequests.getGuests(this.id)
      .then(
        res => {
          if (res.status === 200) {
            console.log(res.data)
            this.guests = res.data
          }
        },
        err => {
          console.log(err)
          this.guests = []
        }
      )
    this.guests = [
      {
        fullName: 'Celia Collins',
        location: {
          city: 'New Damian',
          country: 'New Zealand'
        },
        date: '30 Sep 2016',
        photo: {
          src: '/images/users/01/profile/user_profile.png',
          alt: 'New Damian'
        },
        link: '/cabinet/user/1/profile'
      }
    ]
  }
}
export default userGuestCtrl
