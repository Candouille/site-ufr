'use strict';

angular.module('communauteUfrApp').directive('gameBlock', function($state){
  return {
    /*restrict: Indique sous quelle forme la directive doit être utilisée dans un template html
     'E' => sous forme d'élément: <ma-directive title="Paramètres">...</ma-directive>
     'A' => sous forme d'attribut: <div ma-directive="Paramètres">...</div>
     'C' => sous forme de classe: <div class="ma-directive:Paramètre">...</div>
     'M' => sous forme de commentaire: <!-- directive: ma-directive Paramètres -->
     */
    restrict: 'E',
    scope:{
      game:'='
    },
    controller: function ($scope){
      $scope.backgroundImg = { 'background-image': 'url(images/branches/' + $scope.game.img + ')' };

      $scope.changeState = function () {
        $state.go('branch', {branchName: $scope.game.branch});
      };
    },
    templateUrl: 'views/directives/game-block.html'
  };
});
