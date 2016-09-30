import userMediaCtrl from './userMedia.controller'
const userMediaDefinition = {
  controller: userMediaCtrl,
  controllerAs: 'media',
  bindings: {
    userInfo: '<'
  },
  template: `
  <aside>
    <div class="cabinet-media cabinet-b">
      <div class="cabinet-media__photo-img">
        <a ui-sref="/">
          <img ng-src="{{media.userInfo.photo.src}}" ng-alt="media.userInfo.photo.alt" class="images__cabinet-media">
        </a>
      </div>
      <div class="cabinet-media__user-name" ng-bind="media.userInfo.fullName">
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
  `
};
export default userMediaDefinition
