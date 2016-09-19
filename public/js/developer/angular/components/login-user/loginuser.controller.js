class loginUserCtrl{
  constructor($scope, validate){
    this.$scope = $scope;
    this.emailTpl = validate.emailTpl;
    this.errorMessages = 'Неверно введён пароль или почта';
    this.login = null;
  }
  closeLoginForm(event){
    this.$scope.$emit('closeLogin', false);
  }
  jumpRegistrationForm(){
    this.$scope.$emit('jumpRegistration');
    this.clearForm();
  }
  submitLoginForm(){
    console.log('Submit login form')
  }
  clearForm(){
    if(this.login !== null){
      this.login = null;
    }
  }
}
export default loginUserCtrl;
