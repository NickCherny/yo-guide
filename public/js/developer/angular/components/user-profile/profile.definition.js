import profileCtrl from './profile.controller'
const profileDefinition = {
  controller: profileCtrl,
  controllerAs: 'profile',
  template: `
  <div class="row row-fix">
    <div class="large-4 small-12 columns">
      <user-media-component user-info="profile.userMedia"></user-media-component>
    </div>
    <div class="large-8 small-12 columns">
      <user-profile-info-components user-info="profile.user"></user-profile-info-components>
    </div>
  </div>
  `
};
export default profileDefinition
