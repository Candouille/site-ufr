'use strict';

angular.module('communauteUfrAppApp').directive('branchInfo', function(){
  return {
    restrict: 'E',
    scope:{
      nom:'='
    },
    controller: function ($scope){


    },
    templateUrl: 'views/directives/branch-info.html'
  };
});
