import ROUTER_URL from './config'
let templateUrl = '/js/developer/angular/views/templates/'

export default function($stateProvider, $utlRouterProvider) {

  $utlRouterProvider.otherwise('')
  $stateProvider
    .state(ROUTER_URL.home, {
      url: '',
      templateUrl: `${templateUrl}cabinet/home.html`
    })
    .state(ROUTER_URL.travel, {
      url: '/travel',
      templateUrl: `${templateUrl}cabinet/travel.html`
    })
    .state(ROUTER_URL.tour, {
      url: '/tour',
      templateUrl: `${templateUrl}cabinet/tour.html`
    })
    .state(ROUTER_URL.profile, {
      url: '/profile',
      templateUrl: `${templateUrl}cabinet/profile.html`
    })
    .state(ROUTER_URL.settings, {
      url: '/profile/settings',
      templateUrl: `${templateUrl}cabinet/settings.html`
    })
    .state(ROUTER_URL.message, {
      url: '/messages',
      templateUrl: `${templateUrl}cabinet/messages/messages.template.html`
    })
    .state(ROUTER_URL.travelCreate, {
      url: '/travel/create',
      templateUrl: `${templateUrl}cabinet/travel/travel.create.html`
    })
}
