'use strict';

angular.module('communauteUfrApp').directive('blockNews', function(){
  return {
    restrict: 'E',
    scope:{
      news:'='
    },
    controller: function ($scope, $state){
      $scope.backgroundImg = { 'background-image': 'url(images/news/' + $scope.news.img + ')' };

      $scope.news.date = moment($scope.news.date, "YYYYMMDD").format('DD/MM/YYYY');

      $scope.goToNewsPage = function() {
        $state.go('news', {newsTitle: $scope.news.route, news: $scope.news});
      };
    },
    templateUrl: 'views/directives/block-news.html'
  };
});
