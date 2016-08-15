export default function($stateProvider, $utlRouterProvider){
  $utlRouterProvider.otherwise('/cabinet/home');
  $stateProvider
    .state('travel', {
      url: '/travel',
      templateUrl: '/js/developer/angular/views/templates/travel.page.html',
      controller: 'travelCtrl',
      controllerAs: 'travel'
    })
}
