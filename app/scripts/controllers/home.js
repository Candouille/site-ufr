'use strict';

angular.module('communauteUfrApp')
  .controller('HomeController', function ($scope, $stateParams, $rootScope, $state) {

    // Carousel
    // Fait avec : http://angular-ui.github.io/bootstrap/
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];

    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480287464-gtav.png',
      titre: 'L\'UFR est sur GTA !',
      texte: 'Le respect peut aller se faire foutre. La décence aussi...',
      id: 0
    });
    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480286066-prowler.png',
      titre: 'Le Prowler, la relève du Galaxie',
      texte: 'Get in the gal ! Get in the fucking ga... My mistake. Get in the Prowler !',
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


    $scope.ufrBlocks = [{
      jeu:'Planetside 2',
      titre:'Update des constructions',
      img: 'ps2.jpg'
    },
      {
        jeu:'World of Warships',
        titre:'Tournoi OMNI',
        img: 'wows.jpg'
      },
      {
        jeu:'Grand Theft Auto V',
        titre:'Motos, boulots, bobos',
        img: 'gtav.jpeg'
      },
      {
        jeu:'Star Citizen',
        titre:'CitizenCon 2016',
        img: 'sc.jpg'
      }];

    $scope.blocksJeu = [{
      titre: 'PlanetSide 2',
      sousTitre: 'branche inactive',
      img: 'ps2.jpg',
      branche: 'ps2'
    },
      {
        titre: 'World of Warships',
        sousTitre: 'Recrutement sélectif',
        img: 'wows.jpg',
        branche: 'wows'
      },
      {
        titre: 'Grand Theft Auto V',
        sousTitre: 'Ouvert au recrutement',
        img: 'gtav.jpeg',
        branche: 'gtav'
      },
      {
        titre: 'Star Citizen',
        sousTitre: 'En attente de la V1 du jeu',
        img: 'sc.jpg',
        branche: 'sc'
      }];
  });
