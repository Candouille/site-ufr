'use strict';

angular.module('communauteUfrApp')
  .controller('HomeController', function ($anchorScroll, $location, $scope, $stateParams, $rootScope, $state) {

    // Carousel
    // Fait avec : http://angular-ui.github.io/bootstrap/
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];

    $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    slides.push({
      image: 'images/carousel/overwatch.png',
      titre: 'On lvl up sur Overwatch !',
      texte: 'Si le matchmaking le veut bien...',
      id: 0
    });
    slides.push({
      image: 'images/carousel/sc3-0-soon.png',
      titre: 'La 3.0 arrive bientôt !',
      texte: 'Et peut-être même qu\'un jour, Star Citizen sera terminé pour de vrai !',
      id: 1
    });
    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480287464-gtav.png',
      titre: 'L\'UFR est sur GTA !',
      texte: 'Le respect peut aller se faire foutre. La décence aussi...',
      id: 2
    });
    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480286066-prowler.png',
      titre: 'Le Prowler, la relève du Galaxie',
      texte: 'Get in the gal ! Get in the fucking ga... My mistake. Get in the Prowler !',
      id: 3
    });


    if($rootScope.goToHome === undefined){
      $rootScope.goToHome = function(){
        $state.go('accueil');
      };
    }


    $scope.newsBlocks = [{
      jeu:'World of Warships',
      titre:'Match Lots',
      img: 'wows.jpg',
      file: '2017-10-01-lots-2-m3.json',
      name: 'lots-2-m3'
    },{
      jeu:'World of Warships',
      titre:'Tournoi King of the Sea II',
      img: 'king-of-the-sea-2.png',
      file: '2017-02-27-tournoi-king-of-the-sea-2.json',
      name: 'tournoi-king-of-the-sea-2'
    },{
      jeu:'Planetside 2',
      titre:'Update des constructions',
      img: 'ps2.jpg',
      file: '2017-02-25-1-un-nouveau-fighter-le-hurricane.json',
      name: 'update-des-constructions'
    },{
      jeu:'World of Warships',
      titre:'Tournoi OMNI',
      img: 'wows.jpg',
      file: '2017-02-25-1-un-nouveau-fighter-le-hurricane.json',
      name: 'update-des-constructions'
    },{
      jeu:'Grand Theft Auto V',
      titre:'Motos, boulots, bobos',
      img: 'gtav.jpeg',
      file: '2017-02-25-1-un-nouveau-fighter-le-hurricane.json',
      name: 'update-des-constructions'
    },{
      jeu:'Star Citizen',
      titre:'CitizenCon 2016',
      img: 'sc.jpg',
      file: '2017-02-25-1-un-nouveau-fighter-le-hurricane.json',
      name: 'update-des-constructions'
    }];

    $scope.blocksJeu = [{
      titre: 'PlanetSide 2',
      sousTitre: 'branche inactive',
      img: 'ps2.jpg',
      branche: 'ps2'
    },{
      titre: 'World of Warships',
      sousTitre: 'Recrutement sélectif',
      img: 'wows.jpg',
      branche: 'wows'
    },{
      titre: 'Grand Theft Auto V',
      sousTitre: 'Ouvert au recrutement',
      img: 'gtav.jpeg',
      branche: 'gtav'
    },{
      titre: 'Star Citizen',
      sousTitre: 'En attente de la V1 du jeu',
      img: 'sc.jpg',
      branche: 'sc'
    }];
  });
