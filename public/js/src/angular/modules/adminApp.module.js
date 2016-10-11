import angular, {module} from 'angular';
import 'angular-ui-router'
import headerDefinition from '../components/admin/admin-header/header.definition';
import navigationDefinition from '../components/admin/admin-navigation/navigation.definition';

let adminApp = module('adminApp', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) =>{
    $urlRouterProvider.otherwise("home");

    $stateProvider
      .state('home', {
        url: '',
        templateUrl: '/js/src/angular/views/admin/home.html'
      })
      .state('user/all', {
        url: '/user',
        templateUrl: '/js/src/angular/views/admin/userList.html'
      })
  })

module('adminApp')
  .component('headerComponent', headerDefinition)
  .component('navigationComponent', navigationDefinition);


export default adminApp;
