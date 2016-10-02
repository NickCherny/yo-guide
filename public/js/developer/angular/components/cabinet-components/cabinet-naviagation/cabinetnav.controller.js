class cabinetNavigationCtrl {
  constructor ($location, ROUTER_URL) {
    this.$location = $location
    this.ROUTER_URL = ROUTER_URL
  }
  getActiveLink (path) {
    return (this.$location.path().toString() === path) ? 'cabinet-navigation__item-link_active' : ''
  }
}
export default cabinetNavigationCtrl
