import topmenuCtrl from './topmenu.controller'

const topmenuDefinition = {
  bindings: {
    user: '=',
    guideState: '<'
  },
  template: `
  <div>
    <nav class="top-menu">
      <div class="top-menu_wrapper">
        <div class="row row-fix">
          <div class="large-1 columns">
            <yo-logo-component>LOGO...</yo-logo-component>
          </div>
          <div class="large-4 columns" ng-if="!topmenu.guideState">
            <search-guide-component></search-guide-component>
          </div>
          <div class="large-2 columns">
            <div class="top-menu__user-menu" ng-if="!topmenu.user">
              <span class="top-menu__login-user" ng-click="topmenu.showLoginForm(event)">Войти</span>
              <span class="top-menu__registration-user" ng-click="topmenu.showRegistrationForm(event)">Регистрация</span>
            </div>

          </div>
        </div>
      </div>
    </nav>
    <login-user ng-show="topmenu.loginFormVisible"></login-user>
    <registration-user ng-show="topmenu.registrationFormVisible"></registration-user>
  </div>
  `,
  controller: topmenuCtrl,
  controllerAs: 'topmenu'
}
export default topmenuDefinition
