'use strict';

angular.module('communauteUfrApp').directive('blockNews', function(){
  return {
    restrict: 'E',
    scope:{
      jeu:'=',
      titre:'=',
      img:'='
    },
    controller: function ($scope){
      $scope.imageFond = { 'background-image': 'url(images/news/' + $scope.img + ')' };
    },
    templateUrl: 'views/directives/block-news.html'
  };
});
