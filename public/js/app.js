'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home', controller: MyCtrl1});
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);

// load the following through angular after tile load
  $(document).ready(function() {

		
});