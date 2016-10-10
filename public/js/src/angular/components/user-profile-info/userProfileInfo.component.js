import userDopInfoCtrl from './userProfileInfo.controller.js';
const userDopInfoDefinition = {
  controller: userDopInfoCtrl,
  controllerAs: 'info',
  bindings: {
    userInfo: '<'
  },
  template: `
  <article class="wrapper">
    <div class="box__profile profile-transparent">
      <h1 class="title title__transparent">{{info.userInfo.status}}</h1>
      <ul class="ul box__profile-level">
        <li class="li item__star" ng-repeat="star in info.userInfo.level">
          <svg viewBox="0 0 18 18" class="star">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
          </svg>
        </li>
      </ul>
    </div>
    <div class="box__profile" ng-if="info.userInfo.location">
      <h2 class="title title__regular">Информация</h2>
      <ul class="ul flex-container">
        <li class="li flex-element">
          <span class="title__regular-info">Страна: </span><span class="text__regular-info text_up">{{info.userInfo.location.country}}</span>
        </li>
        <li class="li flex-element">
          <span class="title__regular-info">Город: </span><span class="text__regular-info text_up">{{info.userInfo.location.city}}</span>
        </li>
      </ul>
    </div>
    <div class="box__profile" ng-if="info.userInfo.activity.length > 0">
      <h2 class="title title__regular">Интересы</h2>
      <ul class="profile-info__interests-list">
        <li class="profile-info__interests-list-item" ng-repeat="active in info.userInfo.activity">
          <a ng-href="{{'/guide/search/location/not/activity/' + active.id}}" class="profile-info__interests-list-item-link">{{active.name}}</a>
        </li>
      </ul>
    </div>
    <div class="box__profile">
      <h2 class="title title__regular">Обо мне</h2>
      <div class="profile-info__about-text">
        {{info.userInfo.about}}
      </div>
    </div>
  </article>
  `
};
export default userDopInfoDefinition;
