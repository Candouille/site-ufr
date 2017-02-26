'use strict';

angular
  .module('communauteUfrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    //Neutralisé pour le moment car ajouter un état par défaut empêche les liens de la
    // barre de navigation de l'accueil de fonctionner...
    // $urlRouterProvider.otherwise('/accueil');

    $stateProvider
    .state('home', {
      url: '/accueil',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .state('news', {
      url: '/news/{newsTitle}',
      params: {
        file: null
      },
      templateUrl: 'views/news-page.html',
      controller: 'NewsController'
    });
  })/*.state('branche', {
    url: '/ufrPack/branche',
    params:{
      nomBranche: 'toto'
    },
    templateUrl: 'views/page-branche.html'
  })*/;
