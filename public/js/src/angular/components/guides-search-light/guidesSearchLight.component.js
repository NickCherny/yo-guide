import SearchGuideLight from './guideSearchLight.controller';
const guideSearchLight = {
  controller: SearchGuideLight,
  controllerAs: 'search',
  template: `
  <div class="top-menu__search-b">
    <input type="text" name="guide_info" placeholder="Куда вы планируете отправиться?"
                     data-ng-model="search.text"
                     data-ng-keyup="search.searchGuideKey($event)"
                     class="top-menu__search-inpt">

    <div class="top-menu__search-btn-b">
      <div class="top-menu__search-btn_circle" data-search-guide></div>
      <div class="top-menu__search-btn_line" data-search-guide></div>
    </div>
  </div>
  `
};
export default guideSearchLight;
