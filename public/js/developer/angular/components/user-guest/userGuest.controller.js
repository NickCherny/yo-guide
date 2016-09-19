class userGuestCtrl {
  constructor ($cookies, ServerRequests) {
    this.id = $cookies.get('userId')
    ServerRequests
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
        link: '/api/v1/user/1/profile'
      }
    ]
  }
}
export default userGuestCtrl
