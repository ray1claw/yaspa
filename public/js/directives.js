'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

myApp.directive('yBoot', function(){
  return function(){
    // Remove link from a.
    $('.tile-group a').removeAttr('href');
    // Add animation.
  //   $('.page-header-content').css('opacity', '0');
		// $('li.tile').css('opacity', '0');
		// $('li.tile').css('margin-left', '-20px');
  //   $('.page-header-content').delay(200).animate({'opacity': '+=1'});
  //   $('ul.tile-group li.tile').each(function(index) {
  //   	var stallFor = 75 * parseInt(index);
  //     $(this).delay(stallFor).animate({ 'opacity': '+=1', 'margin-left':'+=20px'}, function () {

  //     });
  //   });
    $('body').css('width', '5000px');
  }	
});

myApp.directive('yTiles', function($compile) {
    return {
        restrict: 'E',
        compile: function(element, attrs) {

          var html = '';
          // html += '<li ng-repeat="tile in tiles" class="tile {{tile.class.size}} {{tile.class.color}} {{tile.type}}" ui-animate="ui-animate">';
          html += '<a href="#" data-reveal-id="myModal" class="tile-content">';
          html += '<img ng-show="tile.image.show", class="{{tile.image.class}}", src="{{tile.image.src}}">';
          html += '<h2>{{tile.smallheading}}</h2>';
          html += '<h5>{{tile.subtitle}}</h5>';
          html += '<i class="{{tile.bigicon}}"></i>';
          html += '<div class="brand">';
          html += '<i class="{{tile.smallicon}}"></i>';
          html += '<div class="badge {{tile.badge.class}}">{{tile.badge.value}}</div>';
          html += '<div class="name">{{tile.name}}</div>';
          html += '</div>';
          html += '</a>';
          // html += '</li>';

            var input = angular.element(html);
            return function(scope, element, attrs) {
                element.append(input);
                var templateFn = $compile(input);
                templateFn(scope);
            }
        }
    }
});