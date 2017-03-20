angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    templateUrl: 'js/views/homeTmpl.html',
    url: '/'
  })
  .state('results', {
    templateUrl: 'js/views/resultsTmpl.html',
    //controller:
    url: '/results'
  })
  .state('about', {
    templateUrl: 'js/views/aboutTmpl.html',
    url: '/about'
  });

  $urlRouterProvider.otherwise('/');

});
