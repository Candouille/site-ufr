'use strict';

/**
 * @ngdoc overview
 * @name communauteUfrAppApp
 * @description
 * # communauteUfrAppApp
 *
 * Main module of the application.
 */
angular
  .module('communauteUfrAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/accueil');

    $stateProvider.state('home', {
      url: '/accueil',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });
  })/*.state('branche', {
    url: '/ufrPack/branche',
    params:{
      nomBranche: 'toto'
    },
    templateUrl: 'views/page-branche.html'
  })*/;
