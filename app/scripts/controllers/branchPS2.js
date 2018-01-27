'use strict';

angular.module('communauteUfrApp')
  .controller('BranchPS2Controller', function ($scope, $state, $stateParams, $http) {

    $scope.ps2Info = {
      creationDate: '27 Juin 2013',
      founder: 'Dovalou',
      status: 'Peu active'
    };

    $http.get('texts/timeline/ps2.json')
      .then(function success(response){
        $scope.timelineEvents = response.data;
      }, function error(response){
        $scope.timelineEvents = [];
        console.log('Can\'t find timeline events...');
        console.log(response);
      });
  });
