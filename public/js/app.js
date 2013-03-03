'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home', controller: MyCtrl1});
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);

// load the following through angular after tile load
  $(document).ready(function() {

		// $('li.tile').hide();
		$('li.tile').css('opacity', '0');
		$('li.tile').css('margin-left', '-20px');
		console.log('test');
    $('ul.tile-group li').each(function(index) {

    	var stallFor = 75 * parseInt(index);
      
      // this.css({'opacity':0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
      // $(this).delay(stallFor).css('opacity', '1');  // Fade it back in. Swap css for animate in legacy browsers if required.
      $(this).delay(stallFor).animate({ 'opacity': '+=1', 'margin-left':'+=20px'}, function () {
            // $(this).animate({ 'opacity': '-=1' });
    });
    // return false;
	});

  $('body').css('width', '5000px');
});