class cabinetSettings {
  constructor ($cookies, $location, $anchorScroll, $scope, validate, serverRequests) {
    this.id = $cookies.get('userId');
    this._location = $location;
    this._anchorScroll = $anchorScroll;
    this.cabinetSettings = Object.create(null);
    this.serverRequests = serverRequests;
    this.emailTpl = validate.emailTpl;
    this.passwordTpl = validate.passwordTpl;
    this.helpers = validate.helpers;
    this.updateProfile = serverRequests.updateProfile;
    this.activitys = [
      {
        text: 'Походу по магазинам',
        name: 'shop'
      },{
        text: 'Рестораны',
        name: 'restaurants'
      },{
        text: 'Спорт и экстрим',
        name: 'sport'
      },{
        text: 'Бары и ночные клубы',
        name: 'nightClub'
      },{
        text: 'Искусство и музеи',
        name: 'art'
      },{
        text: 'Культура и история',
        name: 'history'
      }
    ];
    this._scope = $scope;

    $scope.$on('uploadFile', (e, data) => {
      this.cabinetSettings['photo'] = data || {};
    })
  }
  /**
  *
  * @param {Object} e - event Object
  */
  sendForm (e) {
    if (typeof this.cabinetSettings.interests === 'string') {
      this.cabinetSettings.interests = this.cabinetSettings.interests.split(',').map(item => String(item).toLowerCase().trim())
    }
    if (this.id) {
      this.updateProfile(this.id, this.cabinetSettings)
        .then(
          res => {
            if (res.status === 200) {
              if (res.data.profileUpdate === 1) {
                this._scope.$emit('update-profile');
                this._scope.$broadcast('update-profile');
                console.log('Перейти на главную кабинета')
              }
            }
          },
          err => {
            console.log(err)
          }
        )
    }
    this.cabinetSettings = Object.create(null);
  }
  /**
  *
  * @param {Object} e - event Object
  */
  clearForm (e) {
    this.cabinetSettings = {}
  }
  scrollTo (hash) {
    this._location.hash(hash);
    this._anchorScroll()
  }
  cancelPhoto () {
    this.serverRequests.deletePhoto(this.userId, this.cabinetSettings.photo)
      .then(
        response => {
          console.log(response)
        },
        err => {
          console.error(err)
        }
      );
  }
}
export default cabinetSettings
