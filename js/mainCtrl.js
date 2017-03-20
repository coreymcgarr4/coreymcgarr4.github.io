angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

  $scope.getBook = function(search){
     var promise = mainService.getBook(search);
     console.log(search);

     promise.then(function(results){
         console.log({{book[0].volumeInfo.authors}});
         $scope.book = results.data.items;
       });
   }

  $(document).ready(function(){
    $('.btn-primary').keydown(function(event){
      if (event.keyCode == 13) {
        this.form.getBook(search);
        return false;
      }
    });
  });

});
