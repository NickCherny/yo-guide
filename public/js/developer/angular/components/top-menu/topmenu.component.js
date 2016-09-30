import topmenuCtrl from './topmenu.controller'

const topmenuDefinition = {
  binding: {
    user: '='
  },
  template: `
  <div>
    <nav class="top-menu">
      <div class="top-menu_wrapper">
        <div class="row row-fix">
          <div class="large-1 columns">
            <a href="/" class="top-menu__logo-link" ng-class="topmenu.getActiveLink('/')">
              <svg viewBox="0 0 232.76 53.87" class="logo-element">
              <path d="M10.73,40.94.26,16.79a2.71,2.71,0,0,1-.2-.61A3.12,3.12,0,0,1,0,15.59a2.48,2.48,0,0,1,.29-1.17A3,3,0,0,1,1,13.49a3.62,3.62,0,0,1,1.06-.6,3.51,3.51,0,0,1,1.21-.21A3.12,3.12,0,0,1,5,13.15a3.05,3.05,0,0,1,1.2,1.56L13.9,34.37l7.85-19.7a2.71,2.71,0,0,1,1.08-1.53,2.88,2.88,0,0,1,1.57-.47,3.2,3.2,0,0,1,1.16.21,3.52,3.52,0,0,1,1,.6,2.9,2.9,0,0,1,.73.93,2.65,2.65,0,0,1,.27,1.2,4,4,0,0,1,0,.56,2.57,2.57,0,0,1-.16.59l-13.73,34a3,3,0,0,1-2.94,2.14,3.43,3.43,0,0,1-1.19-.21,3.26,3.26,0,0,1-1.78-1.56,2.6,2.6,0,0,1-.29-1.23c0-.15,0-.32.06-.51a2.07,2.07,0,0,1,.14-.57Z" class="logo__top logo-wod-1"/><path d="M32.29,27a16.78,16.78,0,0,1,.91-5.35A13.55,13.55,0,0,1,36,16.86a13.32,13.32,0,0,1,4.67-3.3,16.42,16.42,0,0,1,6.61-1.23,16.42,16.42,0,0,1,6.61,1.23,13.17,13.17,0,0,1,7.47,8.09A16.79,16.79,0,0,1,62.24,27a16.45,16.45,0,0,1-.91,5.3,13.22,13.22,0,0,1-7.47,8.07,16.41,16.41,0,0,1-6.61,1.23,16.41,16.41,0,0,1-6.61-1.23A13.3,13.3,0,0,1,36,37.07a13.59,13.59,0,0,1-2.77-4.77A16.44,16.44,0,0,1,32.29,27Z" class="logo__top logo-wod-2"/><path d="M106.94,35.86a10.12,10.12,0,0,1-4.23,4.08,11.74,11.74,0,0,1-2.7,1,12.52,12.52,0,0,1-2.84.33A12.8,12.8,0,0,1,91.8,40.2a10.85,10.85,0,0,1-3.87-2.91,12.47,12.47,0,0,1-2.34-4.41,19.45,19.45,0,0,1-.79-5.72,20.88,20.88,0,0,1,.77-5.62,14.37,14.37,0,0,1,2.3-4.81,10.71,10.71,0,0,1,9-4.38,16,16,0,0,1,3,.29,10.31,10.31,0,0,1,2.77,1,10.17,10.17,0,0,1,2.43,1.77,17.78,17.78,0,0,1,2,2.33V15.22a2.83,2.83,0,0,1,.37-1.1,2.87,2.87,0,0,1,.71-.8,3,3,0,0,1,.94-.49,3.6,3.6,0,0,1,1.06-.16,3.4,3.4,0,0,1,1.16.2,3.14,3.14,0,0,1,1,.6,2.93,2.93,0,0,1,.73,1,3.27,3.27,0,0,1,.27,1.38V41.26a14.26,14.26,0,0,1-1.08,5.87,10.1,10.1,0,0,1-3,3.91,12.25,12.25,0,0,1-4.55,2.17,23.16,23.16,0,0,1-5.74.67,19.62,19.62,0,0,1-6.94-1,7.19,7.19,0,0,1-3.77-3.06,2.38,2.38,0,0,1-.4-1.23,2.18,2.18,0,0,1,.6-1.51,1.9,1.9,0,0,1,1.46-.66,2.16,2.16,0,0,1,.8.17l1.61.71A14.84,14.84,0,0,0,94,48a15.45,15.45,0,0,0,2,.47,14.43,14.43,0,0,0,2.43.19,16.17,16.17,0,0,0,3.47-.34,7.31,7.31,0,0,0,2.67-1.13,5.23,5.23,0,0,0,1.73-2.08,7.57,7.57,0,0,0,.61-3.24Zm0-8.82a18.24,18.24,0,0,0-.39-4,10.3,10.3,0,0,0-1.27-3.17,6.53,6.53,0,0,0-2.35-2.28,7.24,7.24,0,0,0-3.64-.84,6.92,6.92,0,0,0-3.5.8,6.12,6.12,0,0,0-2.23,2.21,9.82,9.82,0,0,0-1.18,3.33A21.65,21.65,0,0,0,92,27a15.3,15.3,0,0,0,.57,4.51,9.06,9.06,0,0,0,1.56,3,6.26,6.26,0,0,0,2.33,1.81,6.92,6.92,0,0,0,2.85.6,7.14,7.14,0,0,0,2.93-.61,6.69,6.69,0,0,0,2.41-1.83,9.19,9.19,0,0,0,1.64-3A13.87,13.87,0,0,0,106.91,27Z" class="logo__top logo-wod-3"/><path d="M147.16,38.06a3.22,3.22,0,0,1-.29,1.4,3,3,0,0,1-.76,1,3.18,3.18,0,0,1-1.08.6,4,4,0,0,1-1.24.2,3.89,3.89,0,0,1-1.19-.19,3.16,3.16,0,0,1-1.06-.57,2.94,2.94,0,0,1-.76-.94,3.13,3.13,0,0,1-.31-1.33V36.09a10.76,10.76,0,0,1-1.57,2.14,9.94,9.94,0,0,1-2.28,1.84,10.79,10.79,0,0,1-2.76,1.14,11.6,11.6,0,0,1-3,.39,11.45,11.45,0,0,1-3.83-.64,8.71,8.71,0,0,1-3.21-2,9.53,9.53,0,0,1-2.2-3.4,12.89,12.89,0,0,1-.81-4.77V15.9a3.22,3.22,0,0,1,.29-1.4A3.08,3.08,0,0,1,123,12.88a3.86,3.86,0,0,1,1.23-.2,4,4,0,0,1,1.24.2,3.06,3.06,0,0,1,1.08.61,3.12,3.12,0,0,1,.76,1,3.23,3.23,0,0,1,.29,1.4v15a7.57,7.57,0,0,0,.46,2.71,5.82,5.82,0,0,0,1.23,2,4.82,4.82,0,0,0,1.8,1.19,6.05,6.05,0,0,0,2.14.39,8.26,8.26,0,0,0,2.71-.44,6.3,6.3,0,0,0,2.26-1.34,7,7,0,0,0,2.31-5.1V15.87a3.22,3.22,0,0,1,.29-1.4,3,3,0,0,1,.76-1,3.21,3.21,0,0,1,1.07-.6,3.87,3.87,0,0,1,2.46,0,3.2,3.2,0,0,1,1.07.6,3,3,0,0,1,.76,1,3.23,3.23,0,0,1,.29,1.4Z" class="logo__top logo-wod-4"/><path d="M162.32,3.2a2.83,2.83,0,0,1-1.11,2.3,4.4,4.4,0,0,1-2.85.9,5,5,0,0,1-1.58-.24,4,4,0,0,1-1.26-.67,3.14,3.14,0,0,1-.83-1,2.74,2.74,0,0,1-.3-1.27,2.74,2.74,0,0,1,.3-1.27,3.14,3.14,0,0,1,.83-1,4,4,0,0,1,1.27-.67,5.13,5.13,0,0,1,1.6-.24A5,5,0,0,1,160,.24a3.8,3.8,0,0,1,1.24.67,3.23,3.23,0,0,1,.81,1A2.75,2.75,0,0,1,162.32,3.2ZM155,16a3.39,3.39,0,0,1,.29-1.44,3.07,3.07,0,0,1,.76-1,3.25,3.25,0,0,1,1.08-.63,3.75,3.75,0,0,1,1.24-.21,3.63,3.63,0,0,1,1.23.21,3.29,3.29,0,0,1,1.07.63,3.08,3.08,0,0,1,.76,1,3.4,3.4,0,0,1,.29,1.44v22a3.17,3.17,0,0,1-2.16,3.1,3.74,3.74,0,0,1-1.24.21,3.86,3.86,0,0,1-1.23-.2,2.94,2.94,0,0,1-1.06-.61,3.12,3.12,0,0,1-.74-1,3.48,3.48,0,0,1-.29-1.46Z" class="logo__top logo-wod-5"/><path d="M197.58,38.06a3.22,3.22,0,0,1-.29,1.4,3,3,0,0,1-1.78,1.6,3.73,3.73,0,0,1-1.21.2,4,4,0,0,1-1.2-.19A3.14,3.14,0,0,1,192,40.5a3.22,3.22,0,0,1-.79-1,3.19,3.19,0,0,1-.37-1.31v-.29c0-.21,0-.44,0-.7s0-.48,0-.67v-.31a13.11,13.11,0,0,1-4.4,4,11.44,11.44,0,0,1-5.57,1.37,10.18,10.18,0,0,1-5.14-1.26A11.24,11.24,0,0,1,172,37a15.35,15.35,0,0,1-2.21-4.83,20.51,20.51,0,0,1-.74-5.41,20.05,20.05,0,0,1,.77-5.51,14.11,14.11,0,0,1,2.27-4.7,10.76,10.76,0,0,1,3.73-3.13A11.11,11.11,0,0,1,181,12.33a12.2,12.2,0,0,1,2.91.36,11.64,11.64,0,0,1,2.75,1.06A10.89,10.89,0,0,1,189,15.49a15.49,15.49,0,0,1,1.83,2.07V3.37A3.13,3.13,0,0,1,191.16,2a2.84,2.84,0,0,1,.76-1A3.35,3.35,0,0,1,193,.43a3.87,3.87,0,0,1,1.23-.2,4,4,0,0,1,1.24.2,3.32,3.32,0,0,1,1.08.59,2.82,2.82,0,0,1,.76,1,3.16,3.16,0,0,1,.29,1.37ZM183.25,16.79a6.49,6.49,0,0,0-3.47.86,6.56,6.56,0,0,0-2.23,2.28,10.19,10.19,0,0,0-1.2,3.27,18.51,18.51,0,0,0-.36,3.53,23.8,23.8,0,0,0,.29,3.53,11.62,11.62,0,0,0,1.06,3.45,7,7,0,0,0,2.11,2.56,5.63,5.63,0,0,0,3.45,1,8,8,0,0,0,3.83-.81,6.32,6.32,0,0,0,2.41-2.26,9.8,9.8,0,0,0,1.27-3.3,22.21,22.21,0,0,0,.37-4.31,17,17,0,0,0-.39-3.84,9.53,9.53,0,0,0-1.27-3,6.34,6.34,0,0,0-2.33-2.16A7.36,7.36,0,0,0,183.25,16.79Z" class="logo__top logo-wod-6"/><path d="M232.76,26a2,2,0,0,1-.5,1.36,1.9,1.9,0,0,1-1.53.59H211.29a9.53,9.53,0,0,0,2.56,6.42,8.23,8.23,0,0,0,6.07,2.28,14.27,14.27,0,0,0,4.37-.66,28.44,28.44,0,0,0,4.2-1.74,2.18,2.18,0,0,1,1-.26,1.53,1.53,0,0,1,1.24.57,2,2,0,0,1,.47,1.31,2.48,2.48,0,0,1-.1.67,2.09,2.09,0,0,1-.33.67,8.54,8.54,0,0,1-2.24,2,13.39,13.39,0,0,1-2.87,1.34,18.66,18.66,0,0,1-3.18.76,21.86,21.86,0,0,1-3.18.24,16.07,16.07,0,0,1-5.8-1,13.39,13.39,0,0,1-4.67-3,13.69,13.69,0,0,1-3.11-4.82,16,16,0,0,1-1.13-5.92,14.35,14.35,0,0,1,1.06-5.28,14.56,14.56,0,0,1,7.32-8,13.47,13.47,0,0,1,6-1.27A15.11,15.11,0,0,1,225,13.45a11.91,11.91,0,0,1,6.82,7.41A17.36,17.36,0,0,1,232.76,26Zm-5.94-1.48a11.79,11.79,0,0,0-.66-2.91A7.77,7.77,0,0,0,224.64,19a6.25,6.25,0,0,0-2.4-1.66,8.8,8.8,0,0,0-3.24-.56,7.37,7.37,0,0,0-3,.6,6.57,6.57,0,0,0-2.34,1.74,9.24,9.24,0,0,0-1.58,2.66,10.07,10.07,0,0,0-.71,2.77Z" class="logo__top logo-wod-7"/>
              </g>
              </g>
              </svg>
            </a>
          </div>
          <div class="large-4 columns ">
            <div class="top-menu__search-b">
              <input type="text"
                     name="guide_info"
                     placeholder="Куда вы планируете отправиться?"
                     data-ng-model="tMenu.search"
                     data-ng-keyup="tMenu.searchGuideKey($event)"
                     class="top-menu__search-inpt">

              <div class="top-menu__search-btn-b">
                <div class="top-menu__search-btn_circle" data-search-guide></div>
                <div class="top-menu__search-btn_line" data-search-guide></div>
              </div>
            </div>
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
