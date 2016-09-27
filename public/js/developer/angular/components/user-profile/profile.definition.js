import profileCtrl from './profile.controller'
const profileDefinition = {
  controller: profileCtrl,
  controllerAs: 'profile',
  template: `
  <article class="wrapper">
    <div class="box__profile profile-transparent">
      <h1 class="title title__transparent">Добро пожаловать в Минск!</h1>
    </div>
    <div class="box__profile">
      <h2 class="title title__regular">Информация</h2>
      <div class="row row-fix">
        <ul class="ul large-6 small-12 columns coll-fix">
          <li class="item item__regular-info">Минск, Беларусь</li>
          <li class="item item__regular-info">27, муж</li>
          <li class="item item__regular-info">Рус</li>
        </ul>
        <ul class="large-6 small-12 columns coll-fix">
          <li class="item item__regular-info">
            <a href="#">+375-29-3123573</a>
          </li>
          <li class="item item__regular-info">
            <a href="#">Туры</a>
          </li>
          <li class="item item__regular-info">
            <a href="#">Отзывы</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="box__profile">
      <h2 class="cabinet-title_regular">Интересы</h2>
      <ul class="profile-info__interests-list">
        <li class="profile-info__interests-list-item">
          <a href="#" class="profile-info__interests-list-item-link">Футбол</a>
        </li>
        <li class="profile-info__interests-list-item">
          <a href="#" class="profile-info__interests-list-item-link">Велосипеды</a>
        </li>
        <li class="profile-info__interests-list-item">
          <a href="#" class="profile-info__interests-list-item-link">Путешествия</a>
        </li>
      </ul>
    </div>
    <div class="box__profile">
      <h2 class="cabinet-title_regular">Обо мне</h2>
      <div class="profile-info__about-text">
        Отличное место расположение. Есть свой закрытый дворик.
        Все новое, хорошое и удобное. Но! Это хостел!!!
        Поэтому не удивляйтесь, если Вас поселят не совсем так, как
        Вы заказывали или Вы будете слышать все шаги в коридоре...
      </div>
    </div>
  </article>
  `
};
export default profileDefinition
