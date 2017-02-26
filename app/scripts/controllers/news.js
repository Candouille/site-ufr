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

    // $http.get('texts/news/' + $stateParams.file)
    //   .then(function success(response){
    //     $scope.news = response.data;
    // }, function error(){
    //     $scope.news = {title: 'News introuvable...'}
    //   });
    
    //Solution dégueulasse temporaire en attendant de trouver comment inclures les fichiers
    //json à la tâche build de grunt...
    $scope.news = {
      date: "2017/02/25",
      author: "Candax",
      title: "Un nouveau fighter arrive : le Hurricane !",
      subtitle: "",
      mainImage: "https://robertsspaceindustries.com/media/iv9t115yjn48pr/store_slideshow_large/SkyFlight-V02-Copy.jpg",
      content: [{
        text: "La taille ne fait pas tout: le Hurricane en est la preuve. Malgré son fuselage relativement fin, ce chasseur embarque une sacré puissance de feu. Il compense son manque de confort avec son puissant armement: six canons capables de dézinguer quasiment n'importe quoi. A tel point que les pilotes d'Hurricane cherchent encore le bouclier ennemi qu'ils ne peuvent mettre KO.",
        image: "https://robertsspaceindustries.com/media/vgco9hcmodm8or/store_slideshow_large/Flight-Copy.jpg"
      },{
        text: "Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
        image: "https://robertsspaceindustries.com/media/w5bxy47m9uwbor/store_slideshow_large/Takeoff-Final-V02-Copy.jpg"
      },{
        text: "Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
        image: "https://robertsspaceindustries.com/media/lkj9x01i6jdmvr/store_slideshow_large/Turret-Battle-Copy.jpg"
      }]
    };

  });
