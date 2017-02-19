'use strict';

angular.module('communauteUfrAppApp').directive('branche', function($stateParams){
  return {
    restrict: 'E',
    scope:{

    },
    controller: function ($scope){

      // $scope.changeState = function () {
      //   $state.go($scope.branche);
      // };

      var listeBranches = {
        ps2:{
          nom: 'PlanetSide 2',
          articles: 'brzufzbf ps2',
          description: 'ici c\'est PS2 !'
        },
        wows:{
          nom: 'World of Warships',
          articles: 'zubfzeubfezuib wows',
          description: 'ici c\'est WoWS !'
        },
        gtav:{
          nom: 'Grant Theft Auto V',
          articles: 'zehbeziubezu gta5',
          description: 'ici c\'est GTAV !'
        },
        sc:{
          nom: 'Star Citizen',
          articles: 'ezhbezuibfzuib sc',
          description: 'ici c\'est SC !'
        }
      };
      console.log('branche directive: ' + $stateParams.nomBranche);
      $scope.brancheActuelle = listeBranches[$stateParams.nomBranche];

    },
    templateUrl: 'views/directives/branch.html'
  }
});
