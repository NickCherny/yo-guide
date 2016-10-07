class topmenuCtrl {
  constructor ($rootScope, $location, $scope) {
    this.$scope = $scope;
    this.guideState
    this.loginFormVisible = false;
    this.registrationFormVisible = false;
    this.$scope.$on('closeLogin', data => {
      this.loginFormVisible = false;
      this.$scope.$emit('closeForm')
    });
    this.$scope.$on('closeRegistration', data => {
      this.registrationFormVisible = false;
      this.$scope.$emit('closeForm')
    });
    this.$scope.$on('jumpLogin', (event) => {
      this.registrationFormVisible = false;
      this.loginFormVisible = true
    });
    this.$scope.$on('jumpRegistration', (event) => {
      this.registrationFormVisible = true;
      this.loginFormVisible = false
    });
    this.$scope.$on('showLoginForm', data => this.loginFormVisible = true);
    this.$scope.$on('showRegistrationForm', data => this.registrationFormVisible = true)
  }
  
  showLoginForm (event) {
    this.loginFormVisible = true;
    this.$scope.$emit('formShow')
  }
  showRegistrationForm (event) {
    this.registrationFormVisible = true;
    this.$scope.$emit('formShow')
  }
  showRegistrationUser (event) {
    console.log('show Registration user')
  }
}
export default topmenuCtrl
