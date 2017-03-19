'use strict';

angular.module('communauteUfrApp').directive('blockJeu', function($state){
  return {
    /*restrict: Indique sous quelle forme la directive doit être utilisée dans un template html
     'E' => sous forme d'élément: <ma-directive title="Paramètres">...</ma-directive>
     'A' => sous forme d'attribut: <div ma-directive="Paramètres">...</div>
     'C' => sous forme de classe: <div class="ma-directive:Paramètre">...</div>
     'M' => sous forme de commentaire: <!-- directive: ma-directive Paramètres -->
     */
    restrict: 'E',
    scope:{
      titre:'=',
      sousTitre:'=',
      img:"=",
      branche:"="
    },
    controller: function ($scope){
      $scope.imageFond = { 'background-image': 'url(images/branches/' + $scope.img + ')' };

      $scope.goToBranch = function () {
        $state.go('branch-' + $scope.branche);
      };
    },
    templateUrl: 'views/directives/block-jeu.html'
  };
});
