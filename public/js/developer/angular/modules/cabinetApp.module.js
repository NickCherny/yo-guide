import {module} from 'angular'
import 'angular-ui-router'
import cabinetRouter from '../router/cabinet.router'
import setClassNameFocus from '../directives/setClassNameFocus'

// Components
import cabinetNavigationDefintion from '../components/cabinet-naviagation/cabinetnav.component'
import topmenuAuthDefinition from '../components/top-menu-auth/topmenuAuth.component'
import userMediaDefinition from '../components/user-media/userMedia.component.js'
import userGuestDefinition from '../components/user-guest/userGuest.component'
import userTraveSmallDefinition from '../components/user-travel/userTravelSmall.component'
import footerDefinition from '../components/footer-main/footer.definition'
import profileDefinition from '../components/user-profile/profile.definition'
import userProfileInfoDefinition from '../components/user-profile-info/userProfileInfo.component'
import cabinetHomeComponent from '../components/cabinet-home/cabinetHome.component'

// Services
import ServerRequests from '../factorys/server.requests'

// controllers
import cabinetSettingsCtrl from '../controllers/cabinetSettings.controller'

const cabinetApp = module('cabinetApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', cabinetRouter]);

module('cabinetApp')
  .controller('cabinetSettingsCtrl', cabinetSettingsCtrl);

module('cabinetApp')
  .factory('ServerRequests', ServerRequests);

module('cabinetApp')
  .directive('setClassNameFocus', setClassNameFocus)

module('cabinetApp')
  .component('cabinetNavigation', cabinetNavigationDefintion)
  .component('topMenuAuth', topmenuAuthDefinition)
  .component('userGuestComponent', userGuestDefinition)
  .component('userTravelSmallComponent', userTraveSmallDefinition)
  .component('footerComponent', footerDefinition)
  .component('profileComponent', profileDefinition)
  .component('userMediaComponent', userMediaDefinition)
  .component('userProfileInfoComponents', userProfileInfoDefinition)
  .component('cabinetHomeComponent', cabinetHomeComponent)

export default cabinetApp
