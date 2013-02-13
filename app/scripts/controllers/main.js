'use strict';

yaspaApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

yaspaApp.controller('YaspaNavigation', function($scope, $http) {
  $http.get("data/nav.json").success(function(data){
  	$scope.navigation = data;
  });

  // Order navigation by weight.
  $scope.order= "weight";
});

yaspaApp.controller('YaspaFooter', function($scope, $http) {
  $http.get("data/footer.json").success(function(data){
  	$scope.footer = data;
  });

  // Order navigation by weight.
  $scope.order= "weight";
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
  }

});

yaspaApp.controller('YaspaPrevNxt', function($scope, $location, $http) {
  console.log($location);
  $http.get("data/nav.json").success(function(data){
    var currentUrl = $location.path();
    for(var i=0; i < data.length; i++){
      if(data[i].id == currentUrl){
        if(i+1 < data.length){
          $scope.nxt = data[i+1].link;
        }
        if(i-1 >= 0){
          $scope.prev = data[i-1].link;
        }        
      }
    }
  });

});