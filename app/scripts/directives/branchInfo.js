'use strict';

angular.module('communauteUfrApp').directive('branchInfo', function(){
  return {
    restrict: 'E',
    scope:{
      info:'='
    },
    controller: function ($scope){

    },
    templateUrl: 'views/directives/branch-info.html'
  };
});
