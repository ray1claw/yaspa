'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


myApp.controller('YaspaTiles', function($scope, $location, $http) {
  $http.get("js/data/tiles.json").success(function(data){
  $scope.tiles = data;
 // $scope.mdata = data[1].modal;
  $scope.ymodal = function(tile){
  	console.log(tile.modal.title);
	$scope.mdata = tile.modal.title;
  }
  });
});