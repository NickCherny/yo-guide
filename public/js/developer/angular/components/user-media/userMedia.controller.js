class UserMediaCtrl{
  constructor($cookies, serverRequests){
    this.id = $cookies.get('userId');
    this.photo = {
      src: '/images/users/01/profile/user_profile.png',
      alt: this.fullName
    };
    serverRequests.getUserFullName(this.id).then((result)=>{
        this.fullName = result.data.fullName || 'Имя Пользователя';
      }
    )

  }
}
export default UserMediaCtrl;
