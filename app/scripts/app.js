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
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

    //Redirige vers l'accueil si l'on tape une une url inexistante.
    $urlRouterProvider.otherwise('/accueil');



    $stateProvider
    .state('home', {
      url: '/accueil',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .state('news', {
      url: '/news/{newsTitle}',
      params: {
        news: null
      },
      templateUrl: 'views/news-page.html',
      controller: 'NewsController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
  .run(['$anchorScroll', function($anchorScroll) {
    //Ajoute un petit offset de 50px au dessus de la cible lorsque l'on clique sur une ancre.
    $anchorScroll.yOffset = 50;
}]);
