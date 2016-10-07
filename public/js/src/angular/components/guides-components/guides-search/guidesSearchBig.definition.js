import GuidesSearchBigCtrl from './guidesSearchBig.controller';
const guidesSearchBigDefinition = {
  controller: GuidesSearchBigCtrl,
  controllerAs: 'search',
  bindings: {},
  template: ` 
    <form class="form form__search" toggle-control>
      <div class="wrapper wrapper__search">
        <div class="container container__search">
          <div class="flex-element">
            <svg viewBox="0 0 24 24" class="search-icon__magnifier">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <div class="flex-element">
            <input type="text" class="input" name="search[text]" placeholder="Куда дальше?">
          </div>
          <div class="flex-element" data-toggle-btn>
            <div class="search__filter">
              <svg viewBox="0 0 24 24" class="search__filter__icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
              </svg>
            </div>
            <div class="search__filter-text">
              Настроить поиск
            </div>
          </div>
          <div class="flex-element">
            <button class="btn btn__search">Найти</button>
          </div>
        </div>
      </div>
      
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
    </form>
  `
};
export default guidesSearchBigDefinition;
