import PlanTravelFormCtrl from './planTravelForm.controller';
const planTrvelFormDefinition = {
  controller: PlanTravelFormCtrl,
  controllerAs: 'ptForm',
  template: `
  <div class="wrapper">
    <form action="" novalidate class="form form__plan">
      <div class="row row-fix">
        <div class="large-6 small-12 columns">
          <div class="box__item-plan">
            <h2 class="title__item-plan">Куда вы планируете отправиться?</h2>
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="country" class="label">Страна</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="text" class="input"
                       name="country"
                       id="country"
                       ng-model="cs.cabinetSettings.status"
                       ng-minlength="2"
                       ng-maxlength="55"
                       placeholder="Страна">
              </div>
            </div>
            
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="city" class="label">Город</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="text" class="input"
                       name="city"
                       id="city"
                       ng-model="cs.cabinetSettings.status"
                       ng-minlength="2"
                       ng-maxlength="55"
                       placeholder="Город">
              </div>
            </div>
          </div>
        </div>
        <div class="large-6 small-12 columns">
          <div class="box__item-plan">
            <h2 class="title__item-plan">Когда начнуться приключения?</h2>
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="start" class="label">Начало</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="date" class="input"
                       name="start"
                       id="start"
                       ng-model="cs.cabinetSettings.status"
                       placeholder="дата">
              </div>
            </div>
            
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="end" class="label">Конец</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="date" class="input"
                       name="end"
                       id="end"
                       ng-model="cs.cabinetSettings.status"
                       placeholder="дата">
              </div>
            </div>
          </div>
        </div>
        <div class="large-12 small-12 columns">
          <div class="box__item-plan">
            <h2 class="title__item-plan">Кто будет вашим гидом?</h2>
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="firstName" class="label">Имя</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="text" class="input"
                       name="firstName"
                       id="firstName"
                       ng-model="cs.cabinetSettings.status"
                       ng-minlength="2"
                       ng-maxlength="55"
                       placeholder="Страна">
              </div>
            </div>
            
            <div class="wrapper wrapper__settings flex-container__settings">
              <div class="flex-element">
                <label for="lastName" class="label">Фамилия</label>
              </div>
              <div class="flex-element"
                   data-set-class="helper__settings_show">
                <input type="text" class="input"
                       name="lastName"
                       id="lastName"
                       ng-model="cs.cabinetSettings.status"
                       ng-minlength="2"
                       ng-maxlength="55"
                       placeholder="Город">
              </div>
            </div>
          </div>
        </div>        
        <div class="large-12 small-12 columns">
          <div class="profile-settings__form">
                <div class="wrapper wrapper__settings flex-container__settings btn-box__settings">
                  <div class="flex-element">
                    <button class="btn btn__settings" type="button" ng-click="cs.sendForm($event)">Сохронить</button>
                  </div>
                  <div class="flex-element">
                    <button class="btn btn__settings btn__settings-cancel" type="button" ng-click="cs.clearForm($event); cs.cancelPhoto()">Отменить</button>
                  </div>
                </div>
              </div>
        </div>        
        
        
        
        
      </div>
      
      
      
    </form>
  </div>
  `
};
export default planTrvelFormDefinition;
