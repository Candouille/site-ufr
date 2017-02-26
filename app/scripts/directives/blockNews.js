'use strict';

angular.module('communauteUfrApp').directive('blockNews', function(){
  return {
    restrict: 'E',
    scope:{
      jeu:'=',
      titre:'=',
      img:'=',
      file:'='
    },
    controller: function ($scope, $state){
      $scope.imageFond = { 'background-image': 'url(images/news/' + $scope.img + ')' };

      $scope.goToNewsPage = function() {
        $state.go('news', {newsTitle: $scope.titre, file: $scope.file});
      };
    },
    templateUrl: 'views/directives/block-news.html'
  };
});
