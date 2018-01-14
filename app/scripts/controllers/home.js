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
      image: 'images/carousel/kots5.jpg',
      title: 'L\'UFR repart à l\'assaut du titre',
      text: 'En présentant deux équipes !',
      id: 0
    });
    slides.push({
      image: 'images/carousel/sc-3-0.jpg',
      title: 'La 3.0 est là !',
      text: 'Les FPS un peu moins... Mais la 3.0 est là quand même :D',
      id: 1
    });
    slides.push({
      image: 'images/carousel/overwatch.png',
      title: 'On lvl up sur Overwatch !',
      text: 'Si le matchmaking le veut bien...',
      id: 2
    });
    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480287464-gtav.png',
      title: 'L\'UFR est sur GTA !',
      text: 'Le respect peut aller se faire foutre. La décence aussi...',
      id: 3
    });
    slides.push({
      image: '//image.noelshack.com/fichiers/2016/47/1480286066-prowler.png',
      title: 'Le Prowler, la relève du Galaxie',
      text: 'Get in the gal ! Get in the fucking ga... My mistake. Get in the Prowler !',
      id: 4
    });


    if($rootScope.goToHome === undefined){
      $rootScope.goToHome = function(){
        $state.go('accueil');
      };
    }


    $scope.newsBlocks = [{
      theme:'World of Warships',
      title:'King of the Sea V',
      img: 'ships-fleet.jpg',
      file: '2018-01-10-one-step-from-heaven.json',
      route: 'one-step-from-heaven'
    },{
      theme:'World of Warships',
      title:'Le retour du Twitch',
      img: 'wows3.jpg',
      file: '2018-01-02-maman-je-passe-a-la-tele.json',
      route: 'maman-je-passe-a-la-tele'
    },{
      theme:'World of Warships',
      title:'Fin de la 1ère saison des batailles de clan',
      img: 'wows2.jpg',
      file: '2018-01-01-sortez-la-cb.json',
      route: 'sortez-la-cb'
    },{
      theme:'Découverte',
      title:'Bomber Crew',
      img: 'bomber-crew.jpg',
      file: '2017-12-17-bomber-crew.json',
      route: 'bomber-crew'
    },{
      theme:'World of Warships',
      title:'LotS saison II : UFR vainqueure',
      img: 'wows-carrier.jpg',
      file: '2017-11-20-ufr-wins-lots-2.json',
      route: 'ufr-wins-lots-2'
    },{
      theme:'World of Warships',
      title:'Match LotS',
      img: 'wows.jpg',
      file: '2017-10-01-lots-2-m3.json',
      route: 'lots-2-m3'
    },{
      theme:'World of Warships',
      title:'Tournoi King of the Sea II',
      img: 'king-of-the-sea-2.png',
      file: '2017-02-27-tournoi-king-of-the-sea-2.json',
      route: 'tournoi-king-of-the-sea-2'
    },{
      theme:'Grand Theft Auto V',
      title:'Motos, boulots, bobos',
      img: 'gtav.jpeg',
      file: '2017-02-25-1-un-nouveau-fighter-le-hurricane.json',
      route: 'update-des-constructions'
    }];

    $scope.gameBlocks = [{
      title: 'PlanetSide 2',
      subTitle: 'branche inactive',
      img: 'ps2.jpg',
      branch: 'ps2'
    },{
      title: 'World of Warships',
      subTitle: 'Recrutement sélectif',
      img: 'wows.jpg',
      branch: 'wows'
    },{
      title: 'Grand Theft Auto V',
      subTitle: 'Ouvert au recrutement',
      img: 'gtav.jpeg',
      branch: 'gtav'
    },{
      title: 'Star Citizen',
      subTitle: 'En attente de la V1 du jeu',
      img: 'sc.jpg',
      branch: 'sc'
    }];
  });
