class topmenuCtrl{
  constructor($location){
    this.$location = $location
  }
  getActiveLink(path){
    return (this.$location.path().substr(0, path.length) === path) ? 'cabinet-navigation__item-link_active' : '';
  }
}
const topmenuDefinition = {
  binding: {},
  templateUrl: '/js/developer/angular/views/templates/navigation/topmenu.html',
  controller: topmenuCtrl,
  controllerAs: 'topmenu'
};
export default topmenuDefinition;
