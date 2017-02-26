'use strict';

angular.module('communauteUfrApp')
  .controller('NewsController', function ($scope, $stateParams, $rootScope, $state, $http) {

    $scope.news = {};

    if($rootScope.goToHome === undefined){
      $rootScope.goToHome = function(){
        $state.go('accueil');
      };
    }

    $scope.title = $stateParams.newsTitle;
    $scope.newsFile = $stateParams.file;

    $http.get('views/resources/news/' + $stateParams.file)
      .then(function success(response){
        $scope.news = response.data;
    }, function error(){
        $scope.news = {title: 'News introuvable...'}
      });
  });
