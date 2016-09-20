class userTravelCtrl {
  constructor ($cookies, ServerRequests) {
    this.id = $cookies.get('userId')
    ServerRequests.getTravels(this.id)
      .then(
        res => {
          if (res.status === 200) {
            console.log(res.data)
            this.travels = res.data
          }
        },
        err => {
          console.log(err)
          this.travels = []
        }
      )
    this.travels = [
      {
        link: '',
        dates: {
          start: '30 Sep 2016',
          stop: '04 Oct 2016'
        },
        location: {
          city: 'Paris',
          country: 'France'
        },
        photo: {
          src: '/images/users/01/travels/1/travel_background.png',
          alt: ''
        },
        guides: [
          {
            link: '',
            firstName: 'Ellis',
            lastName: 'Zachary',
            photo: {
              src: '/images/users/01/profile/user_profile.png',
              alt: ''
            }
          }
        ]
      }
    ]
    this.user = null
  }
}
export default userTravelCtrl
