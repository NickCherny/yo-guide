import GuidesHeaderCtrl from './guidesHeader.controller';
const guidesHeaderDefinition = {
  controller: GuidesHeaderCtrl,
  controllerAs: 'gh',
  bindings: {
    headerInfo: '<'
  },
  template: `
  <header class="header header__guides-board" ng-style="{'background-images': gh.headerInfo}">
    <div class="wrapper wrapper__search">
      <guide-big-search-component></guide-big-search-component>
    </div>
  </header>
  `
};
export default guidesHeaderDefinition;
