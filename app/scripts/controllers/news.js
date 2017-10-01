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

    // $scope.title = $stateParams.newsTitle;
    // $scope.newsFile = $stateParams.file;

    // $http.get('texts/news/' + $stateParams.file)
    //   .then(function success(response){
    //     $scope.news = response.data;
    // }, function error(){
    //     $scope.news = {title: 'News introuvable...'}
    //   });

    //Solution dégueulasse temporaire en attendant de trouver comment inclures les fichiers
    //json à la tâche build de grunt...
      var newsList = {
      "update-des-constructions": {
      date: "2017/02/25",
      author: "Candax",
      title: "Un nouveau fighter arrive: le Hurricane !",
      subtitle: "",
      mainVideo: null,
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
    }, "tournoi-king-of-the-sea-2":{
      date: "2017/02/27",
      author: "Garvielle Thisheep",
      title: "Tournoi King of the Sea II",
      subtitle: "",
      mainVideo: "https://www.youtube.com/embed/o6yS9q1Kaek",
      mainImage: null,
      content: [{
        text: "Suite au premier tournoi King of the Sea, l'UFR est bien décidée à se démarquer lors de la nouvelle édition qui aura lieu le samedi 4 et le dimanche 5 mars. Le format sera le même que précédemment: des matchs en T8 opposant des équipes en 9 vs 9.",
        image: "https://s2.qwant.com/thumbr/0x0/f/6/c1a6572d43be7522fb94ec7c3ccf51/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.tapeciarnia.pl%2Ftapety%2Fnormalne%2F243011_world_of_warships.jpg&q=0&b=1&p=0&a=1"
      }]
    }, "lots-2-m3":{
          date: "2017/10/01",
          author: "GizonLounar",
          title: "Match Lots",
          subtitle: "UFR vs WGP2W",
          mainVideo: null,
          mainImage: "https://yt3.ggpht.com/-GWTmdFV3oJ0/AAAAAAAAAAI/AAAAAAAAAAA/11R-8kRpNUI/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",
          content: [{
            text: "Troisième match pour l'UFR dans la League of the Sea II. Ce match nous opposera à la WGP2W le jeudi 5 octobre à 21h. Le format est toujours en 9 vs 9 en T8. Le stream du match sera hébergé par notre chaîne twitch : https://twitch.tv/unitefrancophone ",
            image: "https://s2.qwant.com/thumbr/0x0/f/6/c1a6572d43be7522fb94ec7c3ccf51/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.tapeciarnia.pl%2Ftapety%2Fnormalne%2F243011_world_of_warships.jpg&q=0&b=1&p=0&a=1"
          }]
        }};

    $scope.news = newsList[$stateParams.news.name];


  });
