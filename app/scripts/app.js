(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as $ctrl',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'ngCookies', 'firebase'])
    .config(config);
})();
