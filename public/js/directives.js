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
    $('.page-header-content').css('opacity', '0');
		$('li.tile').css('opacity', '0');
		$('li.tile').css('margin-left', '-20px');
    $('.page-header-content').delay(200).animate({'opacity': '+=1'});
    $('ul.tile-group li').each(function(index) {
    	var stallFor = 75 * parseInt(index);
      $(this).delay(stallFor).animate({ 'opacity': '+=1', 'margin-left':'+=20px'}, function () {
    });
	});
  $('body').css('width', '5000px');
  }	
});

myApp.directive('yTiles', function($compile) {
    return {
        restrict: 'E',
        compile: function(element, attrs) {
          var html = '';
          html += '<li ng-repeat="tile in tiles" class="tile {{tile.class.size}} {{tile.class.color}} {{tile.type}}">';
          html += '<a data-reveal-id="yaspaModal" class="tile-content">';
          html += '<img ng-show="tile.image.show" class="{{tile.image.class}}" src="{{tile.image.src}}">';
          html += '<h2>{{tile.smallheading}}</h2>';
          html += '<h5>{{tile.subtitle}}</h5>';
          html += '<h4>{{tile.h4title}}</h4>';
          html += '<p>{{tile.content}}</p>';
          html += '<i class="{{tile.bigicon}}"></i>';
          html += '<div class="brand {{tile.brand}}">';
          html += '<i class="{{tile.smallicon}}"></i>';
          html += '<p class="text">{{tile.badge.text}}</p>';
          html += '<div ng-show="tile.badge.show" class="badge {{tile.badge.class}}">{{tile.badge.value}}</div>';
          html += '<div class="name">{{tile.name}}</div>';
          html += '</div>';
          html += '</a>';
          html += '</li>';
          html += '<div id="yaspaModal" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
          html += '<div class="row modal-content">';
          html += '<h2>Title</h2>';
          html += '<p class="lead">Subtitle</p>';
          html += '<p>Content</p>';
          html += '</div>';
          html += '<a class="close-reveal-modal">';
          html += '<i class="foundicon-left-arrow">';
          html += '</i>';
          html += '<h5>back</h5>';
          html += '</a>';
          html += '</div>';

            var input = angular.element(html);
            return function(scope, element, attrs) {
                element.append(input);
                var templateFn = $compile(input);
                templateFn(scope);
            }
        }
    }
});