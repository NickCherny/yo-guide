import headerCtrl from './header.controller';
const headerDefinition = {
  binding: {},
  template: `
    <header class="admin-header">
    <div class="admin-header_admin-messages">
      Добро пожаловать в панель админестратора    
    </div>
    <nav class="admin-nav-top">
      <ul>
        <li class="admin-nav-top__item"><a href="/logout/admin" class="admin-nav-top__item-link">Выйти</a></li>
        <li class="admin-nav-top__item"><a href="/admin" class="admin-nav-top__item-link"></a></li>
      </ul>
    </nav>
  </header>
  `,
  controller: headerCtrl
};
export default headerDefinition;
