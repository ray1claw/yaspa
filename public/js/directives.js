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
          html += '<li ng-repeat="tile in tiles" class="tile {{tile.class.size}} {{tile.class.color}} {{tile.type}}">';
          html += '<a ng-click="ymodal(tile)" data-reveal-id="{{tile.id}}" class="tile-content">';
          html += '<img ng-show="tile.image.show" class="{{tile.image.class}}" src="{{tile.image.src}}">';
          html += '<video height="{{tile.video.height}}" width="{{tile.video.width}}" ng-show="tile.video.show" class="{{tile.image.class}}" autoplay loop><source src="{{tile.video.src}}" type="video/ogg"></video>';
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
          html += '<div id="myModal" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
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
          html +- '';
          html += '<div id="5" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
          html += '<div class="row modal-content">';
          html += '<h2>Cartoon animation</h2>';
          html += '<p class="lead"></p>';
          html += '<p><video height="60%" autoplay loop><source src="img/demos/mov_bbb.ogg" type="video/ogg"></video></p>';
          html += '</div>';
          html += '<a class="close-reveal-modal">';
          html += '<i class="foundicon-left-arrow">';
          html += '</i>';
          html += '<h5>back</h5>';
          html += '</a>';
          html += '</div>';
          html += '<div id="3" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
          html += '<div class="row modal-content">';
          html += '<h2>Old building</h2>';
          html += '<p class="lead">Somewhere in Europe</p>';
          html += '<p><img src="img/demos/demo1.png"></img></p>';
          html += '</div>';
          html += '<a class="close-reveal-modal">';
          html += '<i class="foundicon-left-arrow">';
          html += '</i>';
          html += '<h5>back</h5>';
          html += '</a>';
          html += '</div>';
          html += '<div id="6" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
          html += '<div class="row modal-content">';
          html += '<h2>Fotuzlab stream</h2>';
          html += '<p class="lead">Xpressions of Xperiments over Xperience</p>';
          html += "<p><object type='text/html' data='http://www.flickr.com/slideShow/index.gne?group_id=&user_id=44760564@N07&set_id=&text=' width='60%' height='auto'></object><br/><small>Created with <a href='http://www.admarket.se' title='Admarket.se'>Admarket's</a> <a href='http://flickrslidr.com' title='flickrSLiDR'>flickrSLiDR</a>.</small></p>";
          html += '</div>';
          html += '<a class="close-reveal-modal">';
          html += '<i class="foundicon-left-arrow">';
          html += '</i>';
          html += '<h5>back</h5>';
          html += '</a>';
          html += '</div>';
          html += '<div id="2" class="reveal-modal bg-color-red" style="top: 0px; opacity: 1; visibility: hidden; display: none;">';
          html += '<div class="row modal-content">';
          html += '<h2>Lorem</h2>';
          html += '<p class="lead">Ipsum</p>';
          html += "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>";
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