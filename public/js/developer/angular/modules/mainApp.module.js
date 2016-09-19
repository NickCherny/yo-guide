// connect modules
import angular, {module} from 'angular';
import 'angular-cookies';
import ValidateFactory from '../factorys/validator.service.js';
import './cabinetApp.module';
import ROUTER_URL from '../router/config';

// connect controllers
import ApplicationCtrl from '../controllers/application.controller';

// connect directives
import overflowBody from '../directives/overflowBody';
import showHiddenFormRow from '../directives/showHiddeFormRow';
import toggleControl from '../directives/toggleControl';

// connect components
import topmenuDefinition from '../components/top-menu/topmenu.component';
import loginUserDefinition from '../components/login-user/loginuser.component';
import registrationDefinition from '../components/registration-user/registration.component';
import guidesBigSearchDefinition from '../components/guides-search/guidesBigSearch.definition';
import guidesBoardDefinition from '../components/guides-board/guidesBoard.definition';

// connect factory
import ServerRequests from '../factorys/server.requests';

let mainApp = module('mainApp', ['ui.router', 'ngCookies', 'cabinetApp'])
  .constant('ROUTER_URL', ROUTER_URL)
  .controller('applicationCtrl', ApplicationCtrl);

module('mainApp')
  .factory('validate', ValidateFactory)
  .factory('serverRequests', ServerRequests);

module('mainApp')
  .directive('overflowBody', overflowBody)
  .directive('showRow', showHiddenFormRow)
  .directive('toggleControl', toggleControl);

module('mainApp')
  .component('topMenu', topmenuDefinition)
  .component('loginUser', loginUserDefinition)
  .component('registrationUser', registrationDefinition)
  .component('guideBigSearchComponent', guidesBigSearchDefinition)
  .component('guidesBoardComponent', guidesBoardDefinition);

export default mainApp;
