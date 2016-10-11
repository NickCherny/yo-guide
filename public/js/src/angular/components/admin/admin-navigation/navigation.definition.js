import navigationCtrl from './navigation.controller';

const navigationDefinition = {
  binding: {},
  template: `
    <div class="admin-navigation">
      <ul class="admin-navigation-panel">
        <li class="admin-navigation-panel__item" ui-sref-active="admin-navigation_active">
          <a ui-sref="home" class="admin-navigation-panel__item-link">Главная</a>
        </li>
        <li class="admin-navigation-panel__item" ui-sref-active="admin-navigation_active">
          <a ui-sref="user/all" class="admin-navigation-panel__item-link">Просмотреть пользователей</a>
        </li>
      </ul>
    </div>
  `,
  controller: navigationCtrl,
  controllerAs: 'nav'
};
export default navigationDefinition;
