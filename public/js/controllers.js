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
  $scope.tiles = [
    {
     "smallheading": "Nexus S",
     "subtitle": "Fast just got faster with Nexus S.",
     "content": "This is demo content",
     "icon": "foundicon-mail",
     "badge": {
     	"value": 12,
     	"class": ""
     },
     "class": {
     	"size": "double",
        "color": "bg-color-green"
     },
     "image": {
     	"show": 1,
     	"src": "img/demos/demo4.png",
     	"class": "place-right"
     }
    },
    {
     "name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."
    },
    {
     "name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."
    }
  ];
});