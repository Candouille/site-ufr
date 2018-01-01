'use strict';

angular.module('communauteUfrApp').directive('branche', function($stateParams){
  return {
    restrict: 'E',
    scope:{

    },
    controller: function ($scope){

      // $scope.changeState = function () {
      //   $state.go($scope.branche);
      // };

      var branches = {
        ps2:{
          name: 'PlanetSide 2',
          articles: 'brzufzbf ps2',
          description: 'ici c\'est PS2 !'
        },
        wows:{
          name: 'World of Warships',
          articles: 'zubfzeubfezuib wows',
          description: 'ici c\'est WoWS !'
        },
        gtav:{
          name: 'Grant Theft Auto V',
          articles: 'zehbeziubezu gta5',
          description: 'ici c\'est GTAV !'
        },
        sc:{
          name: 'Star Citizen',
          articles: 'ezhbezuibfzuib sc',
          description: 'ici c\'est SC !'
        }
      };
      console.log('branche directive: ' + $stateParams.branchName);
      $scope.currentBranch = branches[$stateParams.branchName];

    },
    templateUrl: 'views/directives/branch.html'
  };
});
