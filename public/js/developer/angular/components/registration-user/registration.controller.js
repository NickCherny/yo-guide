class RegistrationCtrl{
  constructor($scope, validate){
    this.$scope = $scope;
    this.registrationUser = null;
    this.err = {
      empty: 'Обязательно для заполнения',
      email: 'Неверный адрес электронной почты',
      password: 'Пароль должен состоять минимум из 8-и знаков',
      passwordCheck: 'Пароли не совпадают'
    };
    this.validate = validate;
  }
  closeForm(event){
    this.$scope.$emit('closeRegistration', false);
  }
  clearForm(){
    if(this.registrationUser !== null){
      this.registrationUser = null;
    }
  }
  jumpLoginForm(){
    this.$scope.$emit('jumpLogin');
  }
}
export default RegistrationCtrl;
