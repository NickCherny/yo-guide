import PlanTravelCtrl from './planTravel.controller';
const planTravelDefinition = {
  controller: PlanTravelCtrl,
  controllerAs: 'planT',
  template: `
  <h2>Заполните форму</h2>
  <plan-travel-form-component></plan-travel-form-component>
  `
};
export default planTravelDefinition;
