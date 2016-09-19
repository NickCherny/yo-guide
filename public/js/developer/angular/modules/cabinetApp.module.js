import {module} from 'angular';
import 'angular-ui-router';
import cabinetRouter from '../router/cabinet.router';
import cabinetNavigationDefintion from '../components/cabinet-naviagation/cabinetnav.component';
import topmenuAuthDefinition from '../components/top-menu-auth/topmenuAuth.component';
import userMediaDefinition from '../components/user-media/userMedia.component.js';
import userGuestDefinition from '../components/user-guest/userGuest.component';
import userTraveSmallDefinition from '../components/user-travel/userTravelSmall.component';
import profileSettingsFormDefinition from '../components/profile-settings/profileSettings.component';

const cabinetApp = module('cabinetApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', cabinetRouter]);

cabinetApp.component('cabinetNavigation', cabinetNavigationDefintion);
cabinetApp.component('topMenuAuth', topmenuAuthDefinition);
cabinetApp.component('userMediaComponent', userMediaDefinition);
cabinetApp.component('userGuestComponent', userGuestDefinition);
cabinetApp.component('userTravelSmallComponent', userTraveSmallDefinition);
cabinetApp.component('settingsFormComponent', profileSettingsFormDefinition);

export default cabinetApp;
