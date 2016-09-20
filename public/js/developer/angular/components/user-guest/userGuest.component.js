import userGusetCtrl from './userGuest.controller'
const userGuestDefinition = {
  controller: userGusetCtrl,
  controllerAs: 'guest',
  template: `
  <article>
    <div class="box" data-ng-if="guest.guests.length > 0">
      <h2 class="cabinet-guests__title cabinet-title">Ожидаемые гости</h2>
      <ul class="cabinet-guests__collections-b">
        <li class="cabinet-guests__item-guest-b" data-ng-repeat="guest in guest.guests">
          <div class="row row-fix">
            <div class="large-3 columns columns-fix_left">
              <a ng-href="{{guest.link}}" class="cabinet-guests__item-guest-link">
                <img data-ng-src="{{ guest.photo.src }}"
                     data-ng-alt="{{ guest.photo.alt }}"
                     class="cabinet-guests__item-guest-photo">
              </a>
            </div>
            <div class="large-9 columns columns-fix">
              <h3 class="cabinet-guests__item-guest-name">
                <a ng-href="{{ guest.link }}">
                  {{ guest.fullName }}
                </a>
              </h3>
              <div class="cabinet-guests__item-guest-home">
                {{ guest.location.city + ', ' + guest.location.country }}
              </div>
              <div class="cabinet-guests__item-guest-date">
                {{ guest.date }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="box" data-ng-if="guest.guests.length === 0">
      <h2 class="cabinet-guests__title cabinet-title">Ожидаемые гости</h2>
      <div class="cabinet-guests__item-b">
        <div class="title title_small">У вас пока нет гостей</div>

        <!-- todo: --process development -->
        <!-- begin -->
        <a ui-sref="/guests/search" class="cabinet-guests__btn-link" ng-show="false">Найти гостей</a>
        <!-- end -->
      </div>
    </div>
  </article>
  `
}
export default userGuestDefinition
