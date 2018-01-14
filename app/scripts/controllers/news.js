'use strict';

angular.module('communauteUfrApp')
  .controller('NewsController', function ($scope, $stateParams, $rootScope, $state, $http) {

    $scope.news = {};

    if($rootScope.goToHome === undefined){
      $rootScope.goToHome = function(){
        $state.go('home');
      };
    }

    if(!$stateParams.news){
      $rootScope.goToHome();
    }

    $http.get('texts/news/' + $stateParams.news.file)
      .then(function success(response){
        $scope.news = response.data;
      }, function error(){
        $scope.news = {title: 'News introuvable...'}
      });
  });
