import profileCtrl from './profile.controller'
const profileDefinition = {
  controller: profileCtrl,
  controllerAs: 'profile',
  template: `
  <div class="row row-fix">
    <div class="large-2 small-12 columns coll-fix_right">
      <user-media-component user-info="profile.userMedia"></user-media-component>
    </div>
    <div class="large-10 small-12 columns coll-fix_left">
      <user-profile-info-components user-info="profile.user"></user-profile-info-components>
    </div>
  </div>
  `
};
export default profileDefinition
