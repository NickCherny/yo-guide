class cabinetNavigationCtrl{
  constructor($location){
    this.$location = $location
  }
  getActiveLink(path){
    return (this.$location.path().substr(0, path.length) === path) ? 'cabinet-navigation__item-link_active' : '';
  }
}
export default cabinetNavigationCtrl;
