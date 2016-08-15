class cabinetNavigationCtrl{
  constructor($location){
    this.$location = $location
  }
  getActiveLink(path){
    return (this.$location.path().substr(0, path.length) === path) ? 'cabinet-navigation__item-link_active' : '';
  }
}
const cabinetNavigationDefinition = {
  binding: {},
  templateUrl: '/js/developer/angular/views/templates/navigation/cabinet.navigation.html',
  controller: cabinetNavigationCtrl,
  controllerAs: 'cN'
};

export default cabinetNavigationDefinition;
