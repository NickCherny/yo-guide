import GuidesFilterCtrl from './guidesFilter.controller';
const guidesFilterDefinition = {
  controller: GuidesFilterCtrl,
  controllerAs: 'filter',
  template: `
  <div class="wrapper wrapper__search wrapper__search_toggle" data-toggle-container>
    <div class="filter-box">
      <div class="wrapper filter-item">
        <div class="filter-item__title">Язык</div>
        <div class="filter-item__box">
          <ul class="ul ul__filter-item">
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="en">
              <label for="en" class="label">English</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="rus">
              <label for="rus" class="label">Русский</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="by">
              <label for="by" class="label">Беларуский</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper filter-item">
        <div class="filter-item__title">Интересы</div>
        <div class="filter-item__box">
          <ul class="ul ul__filter-item">
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="bar">
              <label for="bar" class="label">Бары</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="history">
              <label for="history" class="label">История</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="arch">
              <label for="arch" class="label">Город</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="water">
              <label for="water" class="label">Вода</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="casino">
              <label for="casino" class="label">Казино</label>
            </li>
            <li class="filter__element">
              <input type="checkbox" class="input" hidden id="club">
              <label for="club" class="label">Клубы</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper filter-item">
        <div class="filter-item__title">Пол</div>
          <div class="filter-item__box">
            <ul class="ul ul__filter-item">
              <li class="filter__element">
                <input type="checkbox" class="input" hidden id="man">
                <label for="man" class="label">Мужской</label>
              </li>
              <li class="filter__element">
                <input type="checkbox" class="input" hidden id="women">
                <label for="women" class="label">Женский</label>
              </li>
              <li class="filter__element">
                <input type="checkbox" class="input" hidden id="non">
                <label for="non" class="label">Любой</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filter-box__send">
        <button class="btn btn__filter-send flex-element">Применить</button>
        <button class="btn btn__filter-cancel flex-element">Сбросить</button>
      </div>
  </div>
  `
};
export default guidesFilterDefinition;
