import userMediaCtrl from './userMedia.controller'
const userMediaDefinition = {
  binding: {},
  template: `
  <aside>
    <div class="cabinet-media cabinet-b">
      <div class="cabinet-media__photo-img">
        <a ui-sref="/">
          <img ng-src="{{media.data.photo}}" ng-alt="{{media.data.photo.alt}}" class="images__cabinet-media">
        </a>
      </div>
      <div class="cabinet-media__user-name" ng-bind="media.data.fullName">
        Имя
      </div>
      <div class="cabinet-media__user-links-b">
        <div>
          <a ui-sref="/profile" class="cabinet-media__user-link-item">Просмотреть профиль</a>
        </div>
        <div>
          <a ui-sref="/profile/settings" class="cabinet-media__user-link-item">Редактировать профиль</a>
        </div>
      </div>
    </div>
  </aside>
  `,
  controller: userMediaCtrl,
  controllerAs: 'media'
}
export default userMediaDefinition
