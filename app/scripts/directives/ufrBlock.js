'use strict';

angular.module('communauteUfrAppApp').directive('ufrBlock', function(){
  return {
    restrict: 'E',
    scope:{
      jeu:'=',
      titre:'=',
      img:'='
    },
    controller: function ($scope){
      $scope.imageFond = { 'background-image': 'url(/images/news/' + $scope.img + ')' };
    },
    templateUrl: 'views/directives/ufr-block.html'
  }
});
