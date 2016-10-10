import topmenuCtrl from './topmenuAuth.controller.js'

const topmenuAuthDefinition = {
  controller: topmenuCtrl,
  controllerAs: 'topmenu',
  bindings: {
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
          <div class="large-5 columns">
            <div class="top-menu__msg-b">
              <div class="top-menu__msg_hide-b">
                <a ng-href="/cabinet/user/1/messages"
                   class="top-menu__msg-link">
                  <span class="top-menu__item-msg-text hide-for-small-only">Сообщения</span>
                  <span class="top-menu__item-msg-img">
                    <svg viewBox="0 0 24 24" class="icon__top-nav-message">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="large-2 columns">
            <div class="top-menu__user-menu top-menu__user-menu_acaunt">
              <a ui-sref="/"
                 class="top-menu__user-acaunt-link">
                <span class="top-menu__usr-logo-name">{{topmenu.user.fullName}}</span>

                <img 
                     class="top-menu__usr-logo-img"
                     ng-src="{{topmenu.user.photo}}"
                     data-ng-alt="topmenu.user.fullName"
                     id="top_menu__ava_ltl">
              </a>
              <div class="drop-down-menu">
                <a ui-sref="/profile" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Профиль</a>
                <!--<a ui-sref="/travel" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Поездки</a>-->
                <!--<a ui-sref="/tour" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Туры</a>-->
                <a ui-sref="/profile/settings" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Настройки</a>
                <a href="/user/logout" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  `
};
export default topmenuAuthDefinition
