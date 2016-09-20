import topmenuCtrl from './topmenuAuth.controller.js'

const topmenuAuthDefinition = {
  binding: {
    user: '='
  },
  template: `
  <div>
    <nav class="top-menu">
      <div class="top-menu_wrapper">
        <div class="row row-fix">
          <div class="large-1 columns">
            <a href="/" class="top-menu__logo-link">
              LOGO
            </a>
          </div>
          <div class="large-4 columns ">
            <div class="top-menu__search-b">
              <input type="text"
                     name="guide_info"
                     placeholder="Найти гида"
                     data-ng-model="tMenu.search"
                     data-ng-keyup="tMenu.searchGuideKey($event)"
                     class="top-menu__search-inpt">

              <div class="top-menu__search-btn-b">
                <div class="top-menu__search-btn_circle" data-search-guide></div>
                <div class="top-menu__search-btn_line" data-search-guide></div>
              </div>
            </div>
          </div>
          <div class="large-5 columns">
            <div class="top-menu__msg-b">
              <div class="top-menu__msg_hide-b">
                <a ui-sref="/messages" ui-sref-active="top-menu_active"
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
                <span class="top-menu__usr-logo-name">User</span>

                <img data-ng-src=""
                     class="top-menu__usr-logo-img"
                     data-ng-alt="user.photo.alt"
                     id="top_menu__ava_ltl">
              </a>
              <div class="drop-down-menu">
                <a ui-sref="/profile" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Профиль</a>
                <a ui-sref="/travel" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Поездки</a>
                <a ui-sref="/tour" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Туры</a>
                <a ui-sref="/profile/settings" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Настройки</a>
                <a href="/api/v1/logout/user" ui-sref-active="drop-down-menu__item-link_active" class="drop-down-menu__item-link">Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  `,
  controller: topmenuCtrl,
  controllerAs: 'topmenu'
}
export default topmenuAuthDefinition
