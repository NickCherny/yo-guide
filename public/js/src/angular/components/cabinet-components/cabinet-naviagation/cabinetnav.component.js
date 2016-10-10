import cabinetNavigationCtrl from './cabinetnav.controller'
const cabinetNavigationDefinition = {
  binding: {},
  template: `
  <div class="cabinet__cntrl-panel">
    <ul class="cabinet__cntrl-panel-b">
      <li class="cabinet__cntrl-panel-item">
        <a ui-sref="/" ui-sref-active="cabinet-navigation__item-link_active" class="cabinet__cntrl-panel-item-link">
          <span class="mobile-icon show-for-small-only">
            <svg viewBox="0 0 24 24" class="mobile-icon__cabinet-navigation">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </span>
          <span class="hide-for-small-only">
            Дом
          </span>
        </a>
      </li>
      <!--<li class="cabinet__cntrl-panel-item">-->
        <!--<a ui-sref="/travel" ui-sref-active="cabinet-navigation__item-link_active" class="cabinet__cntrl-panel-item-link">-->
          <!--<span class="mobile-icon show-for-small-only">-->
            <!--<svg viewBox="0 0 24 24" class="mobile-icon__cabinet-navigation">-->
                <!--<path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>-->
                <!--<path d="M0 0h24v24H0z" fill="none"/>-->
            <!--</svg>-->
          <!--</span>-->
          <!--<span class="hide-for-small-only">Поездки</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="cabinet__cntrl-panel-item">-->
        <!--<a ui-sref="/tour" ui-sref-active="cabinet-navigation__item-link_active" class="cabinet__cntrl-panel-item-link">-->
          <!--<span class="mobile-icon show-for-small-only">-->
          <!--<svg viewBox="0 0 24 24" class="mobile-icon__cabinet-navigation">-->
              <!--<path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"/>-->
              <!--<path d="M0 0h24v24H0z" fill="none"/>-->
          <!--</svg>-->
          <!--</span>-->
          <!--<span class="hide-for-small-only">Туры</span>-->
        <!--</a>-->
      <!--</li>-->
      <li class="cabinet__cntrl-panel-item">
        <a ui-sref="/profile" ui-sref-active="cabinet-navigation__item-link_active" class="cabinet__cntrl-panel-item-link">
          <span class="mobile-icon show-for-small-only">
            <svg viewBox="0 0 24 24" class="mobile-icon__cabinet-navigation">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </span>
          <span class="hide-for-small-only">Профиль</span>
        </a>
      </li>
      <li class="cabinet__cntrl-panel-item">
        <a ui-sref="/profile/settings" ui-sref-active="cabinet-navigation__item-link_active" class="cabinet__cntrl-panel-item-link">
          <span class="mobile-icon show-for-small-only">
            <svg viewBox="0 0 24 24" class="mobile-icon__cabinet-navigation">
                <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
          </span>
          <span class="hide-for-small-only">Настройки</span>
        </a>
      </li>
    </ul>
  </div>
  `,
  controller: cabinetNavigationCtrl,
  controllerAs: 'cN'
}
export default cabinetNavigationDefinition
