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