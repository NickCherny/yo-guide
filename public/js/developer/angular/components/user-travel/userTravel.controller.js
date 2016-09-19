class userTravelCtrl{
  constructor(){
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
    ];
    this.user = null;
  }
}
export default userTravelCtrl;
