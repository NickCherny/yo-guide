class cabinetSettings {
  constructor ($cookies, $location, $anchorScroll, validate, serverRequests) {
    this.id = $cookies.get('userId')
    this._location = $location
    this._anchorScroll = $anchorScroll
    this.cabinetSettings = {}
    this.emailTpl = validate.emailTpl
    this.passwordTpl = validate.passwordTpl
    this.helpers = validate.helpers
    this.updateProfile = serverRequests.updateProfile
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
    ]
  }
  /**
  *
  * @param {Object} e - event Object
  */
  sendForm (e) {
    if (typeof this.cabinetSettings.interests === 'string') {
      this.cabinetSettings.interests = this.cabinetSettings.interests.split(',').map(item => String(item).toLowerCase().trim())
    }
    console.log(this)
    if (this.id) {
      this.updateProfile(this.id, this.cabinetSettings)
        .then(
          res => {
            if (res.status === 200) {
              if (res.data.profileUpdate === 1) {
                console.log('Перейти на главную кабинета')
              }
            }
          },
          err => {
            console.log(err)
          }
        )
    }
    this.cabinetSettings = {}
  }
  /**
  *
  * @param {Object} e - event Object
  */
  clearForm (e) {
    this.cabinetSettings = {}
  }
  scrollTo (hash) {
    this._location.hash(hash)
    this._anchorScroll()
  }
}
export default cabinetSettings
