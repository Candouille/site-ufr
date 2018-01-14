'use strict';

angular.module('communauteUfrApp').directive('blockNews', function(){
  return {
    restrict: 'E',
    scope:{
      news:'='
    },
    controller: function ($scope, $state){
      $scope.imageFond = { 'background-image': 'url(images/news/' + $scope.news.img + ')' };

      $scope.goToNewsPage = function() {
        $state.go('news', {newsTitle: $scope.news.route, news: $scope.news});
      };
    },
    templateUrl: 'views/directives/block-news.html'
  };
});
