angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

  $scope.getBook = function(search){
     var promise = mainService.getBook(search);
     console.log(search);

     promise.then(function(results){
         console.log(results);
         $scope.book = results.data.items;
       });
   }

});
