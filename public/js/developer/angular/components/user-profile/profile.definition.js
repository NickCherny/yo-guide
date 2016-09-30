import profileCtrl from './profile.controller'
const profileDefinition = {
  controller: profileCtrl,
  controllerAs: 'profile',
  template: `
  <article class="wrapper">
    <div class="box__profile profile-transparent">
      <h1 class="title title__transparent">{{profile.user.status}}</h1>
      <ul class="ul box__profile-level">
        <li class="li item__star" ng-repeat="star in profile.user.level">
          <svg viewBox="0 0 18 18" class="star">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
          </svg>
        </li>
      </ul>
    </div>
    <div class="box__profile" ng-if="profile.user.location || profile.user.gender">
      <h2 class="title title__regular">Информация</h2>
      <ul class="ul flex-container">
        <li class="li flex-element">
          <span class="title__regular-info">Страна: </span><span class="text__regular-info">Беларусь</span>
        </li>
        <li class="li flex-element">
          <span class="title__regular-info">Город: </span><span class="text__regular-info">Минск</span>
        </li>
        <li class="li flex-element">
          <span class="title__regular-info">Пол: </span><span class="text__regular-info">мужской</span>
        </li>
        <li class="li flex-element">
          <span class="title__regular-info">Язык: </span><span class="text__regular-info">рус</span>
        </li>
      </ul>
    </div>
    <div class="box__profile" ng-if="profile.user.activity.length > 0">
      <h2 class="title title__regular">Интересы</h2>
      <ul class="profile-info__interests-list">
        <li class="profile-info__interests-list-item" ng-repeat="active in profile.user.activity">
          <a ng-href="{{'/guide/search/location/not/activity/' + active.id}}" class="profile-info__interests-list-item-link">{{active.name}}</a>
        </li>
      </ul>
    </div>
    <div class="box__profile">
      <h2 class="title title__regular">Обо мне</h2>
      <div class="profile-info__about-text">
        {{profile.user.about}}
      </div>
    </div>
  </article>
  `
};
export default profileDefinition
