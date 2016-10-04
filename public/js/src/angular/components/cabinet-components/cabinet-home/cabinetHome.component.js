import CabinetHomeCtrl from './cabinetHome.controller';
const cabinetHomeDefinition = {
  controller: CabinetHomeCtrl,
  controllerAs: 'cabinet',
  bindings: {},
  template: `
  <div class="row row-fix">
    <div class="large-2 columns coll-fix-right">
      <user-media-component user-info="cabinet.userMedia">Профиль...</user-media-component>
    </div>
    <div class="large-3 columns">
      <user-guest-component>Гости...</user-guest-component>
    </div>
    <div class="large-7 columns coll-fix_left">
      <user-travel-small-component>Поездки...</user-travel-small-component>
    </div>
  </div>
  `
};
export default cabinetHomeDefinition;
