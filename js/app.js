angular.module('myApp', ['ui.router'])

// .controller('mainCtrl', function($scope, $http){
//   $scope.$watch('search', function() {
//     fetch();
//   });
//
//   // $scope.search = "Harry Potter";
//
//   function fetch(){
//     $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search)
//     .then(function(response){ $scope.details = response.data; });
//   }
//
//   $scope.update = function(book){
//     $scope.search = book.Title;
//   };
//
//   $scope.select = function(){
//     this.setSelectionRange(0, this.value.length);
//   }
//
// })



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
