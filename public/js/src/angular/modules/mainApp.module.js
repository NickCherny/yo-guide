// connect modules
import angular, {module} from 'angular'
import 'angular-cookies'
import './cabinetApp.module'
import ROUTER_URL from '../router/config'
import adminApp from './adminApp.module'

// connect controllers
import ApplicationCtrl from '../controllers/application.controller'

// connect directives
import overflowBody from '../directives/overflowBody'
import showHiddenFormRow from '../directives/showHiddeFormRow'
import toggleControl from '../directives/toggleControl'
import uploadFile from '../directives/uploadFile'
import repeatElement from '../directives/repeatElement'
import imageLoading from '../directives/imageLoading';

// connect components
import topmenuDefinition from '../components/top-menu/topmenu.component'
import loginUserDefinition from '../components/login-user/loginuser.component'
import registrationDefinition from '../components/registration-user/registration.component'
import guidesBigSearchDefinition from '../components/guides-components/guides-search/guidesSearchBig.definition.js'
import guidesBoardDefinition from '../components/guides-components/guides-board/guidesBoard.definition'
import yoLogoDefinition from '../components/yo-logo/yoLogo.component';

// connect factory
import ServerRequests from '../factorys/server.requests'
import ValidateFactory from '../factorys/validator.service.js'

let mainApp = module('mainApp', ['ui.router', 'ngCookies', 'cabinetApp', 'adminApp'])
  .constant('ROUTER_URL', ROUTER_URL)
  .controller('applicationCtrl', ApplicationCtrl)

module('mainApp')
  .factory('validate', ValidateFactory)
  .factory('serverRequests', ServerRequests)

module('mainApp')
  .directive('overflowBody', overflowBody)
  .directive('showRow', showHiddenFormRow)
  .directive('toggleControl', toggleControl)
  .directive('uploadFile', uploadFile)
  .directive('repeatElement', repeatElement)
  .directive('imageLoading', imageLoading)

module('mainApp')
  .component('topMenu', topmenuDefinition)
  .component('loginUser', loginUserDefinition)
  .component('registrationUser', registrationDefinition)
  .component('guideBigSearchComponent', guidesBigSearchDefinition)
  .component('guidesBoardComponent', guidesBoardDefinition)
  .component('yoLogoComponent', yoLogoDefinition)

export default mainApp
