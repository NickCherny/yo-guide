import topmenuCtrl from './topmenuAuth.controller.js'

const topmenuAuthDefinition = {
  binding: {
    user: '='
  },
  templateUrl: '/js/developer/angular/views/templates/navigation/topmenuAuth.html',
  controller: topmenuCtrl,
  controllerAs: 'topmenu'
}
export default topmenuAuthDefinition
