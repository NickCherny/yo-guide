import {module} from 'angular';
import 'angular-ui-router';
import cabinetRouter from '../router/cabinet.router';
import cabinetNavigationDefintion from '../components/cabinet-naviagation/cabinetnav.component';
import topmenuAuthDefinition from '../components/top-menu-auth/topmenuAuth.component';

const cabinetApp = module('cabinetApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', cabinetRouter]);

cabinetApp.component('cabinetNavigation', cabinetNavigationDefintion);
cabinetApp.component('topMenuAuth', topmenuAuthDefinition);

export default cabinetApp;
