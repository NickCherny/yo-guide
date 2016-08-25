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

// connect components
import topmenuDefinition from '../components/top-menu/topmenu.component';
import loginUserDefinition from '../components/login-user/loginuser.component';
import registrationDefinition from '../components/registration-user/registration.component';

// connect factory
import ServerRequests from '../factorys/server.requests';

let mainApp = module('mainApp', ['ui.router', 'ngCookies', 'cabinetApp'])
  .constant('ROUTER_URL', ROUTER_URL)
  .controller('applicationCtrl', ApplicationCtrl);

mainApp.factory('validate', ValidateFactory);
mainApp.factory('serverRequests', ServerRequests);

mainApp.directive('overflowBody', overflowBody);
mainApp.directive('showRow', showHiddenFormRow);

mainApp.component('topMenu', topmenuDefinition);
mainApp.component('loginUser', loginUserDefinition);
mainApp.component('registrationUser', registrationDefinition);

export default mainApp;
