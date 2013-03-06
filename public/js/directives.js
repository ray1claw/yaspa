'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

myApp.directive('startAnimation', function(){
  return function(){
    // Remove link from a.
    $('.tile-group a').removeAttr('href');
    // Add animation.
		$('li.tile').css('opacity', '0');
		$('li.tile').css('margin-left', '-20px');
    $('ul.tile-group li').each(function(index) {
    	var stallFor = 75 * parseInt(index);
      $(this).delay(stallFor).animate({ 'opacity': '+=1', 'margin-left':'+=20px'}, function () {
    });
	});
  $('body').css('width', '5000px');
  }	
});