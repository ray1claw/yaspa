'use strict';

yaspaApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

yaspaApp.controller('YaspaNavigation', function($scope, $location, $http) {


  $http.get("data/nav.json").success(function(data){
    $scope.$on('$viewContentLoaded', hideNav());
  	$scope.navigation = data;
    $scope.actives = "";
    $scope.id = $location.path();
    $scope.$on('$routeChangeStart', function(){
      for(var i=0; i<data.length; i++){
        if($location.path() == data[i].id){
          $scope.id = data[i].id;
        }
        else if($location.path() == "/page/"){
          $scope.id = "";
        }
      }
    });
  });

  // Order navigation by weight.
  $scope.order= "weight";
});

yaspaApp.controller('YaspaFooter', function($scope, $location, $http) {


  $http.get("data/footer.json").success(function(data){
  $scope.footer = data;
  var currentUrl = $location.hash();
  $scope.id = currentUrl;
  $scope.$on('$routeChangeStart', function(){
  $scope.id = $location.hash();
  });
    for(var i=0; i<data.length; i++){
      if(currentUrl == data[i].id){
        $scope.content = data[i].content;
        $scope.name = data[i].name;
      }
    }

    // Order navigation by weight.
    $scope.order= "weight";
  });
});

yaspaApp.controller('YaspaAbout', function($scope, $http) {
  $http.get("data/about.json").success(function(data){
    $scope.thumbnails = data;
    $scope.mainImageUrl = data[0].image;
    $scope.content = data[0].content;
    $scope.title = data[0].title;
  });

  $scope.mainImage = function(imag){
    $scope.mainImageUrl = imag.image;
    $scope.content = imag.content;
    $scope.title = imag.title;
    $('#about-content').fitVids();
  }

});

yaspaApp.controller('YaspaPrevNxt', function($scope, $location, $http) {
  
  $scope.$on('$routeChangeStart', function(){
    $http.get("data/nav.json").success(function(data){
    var currentUrl = $location.path();
    $scope.text="";
    $scope.nxtShow = 0;
    $scope.prevShow = 0;
    for(var i=0; i < data.length; i++){
      if(data[i].id == currentUrl){
        if(i+1 < data.length){
          $scope.nxt = data[i+1].link;
          $scope.nxtShow = 1;
          if(currentUrl=="/"){
            $scope.text="Know more";
          } 
        }
        if(i-1 >= 0){
          $scope.prev = data[i-1].link;
          $scope.prevShow = 1;
        }      
      }
    }
    if($location.path() == '/page/'){
      $scope.nxtShow = 0;
      $scope.prevShow = 0;
    }
    $scope.keypressCallback = function(event) {
      alert('Voila!');};
    });
  });

});


 var hideNav = function() {
  console.log('test');
  $('li').bind('click', function() {
    console.log('done');
    if($('.btn-navbar').is(":visible")) {
      $('.btn-navbar').click();
    }
    return;
  });
}