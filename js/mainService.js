angular.module('myApp')
.service('mainService', function($http){

  this.getBook = function(search){
    console.log(search);
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + search
    });
  };
});
