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
     "type": "text",
     "smallheading": "Nexus S",
     "subtitle": "Fast just got faster with Nexus S.",
     "content": "This is demo content",
     "bigicon": "",
     "smallicon": "foundicon-mail",
     "name": "",
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
     "type": "icon",
     "smallheading": "",
     "subtitle": "",
     "content": "",
     "bigicon": "foundicon-smiley",
     "smallicon": "",
     "name": "Icon",
     "badge": {
     	"value": "",
     	"class": ""
     },
     "class": {
     	"size": "",
        "color": "bg-color-blue"
     },
     "image": {
     	"show": 0,
     	"src": "",
     	"class": ""
     }
    },
    {
     "type": "image",
     "smallheading": "",
     "subtitle": "",
     "content": "",
     "bigicon": "foundicon-smiley",
     "smallicon": "",
     "name": "Image",
     "badge": {
     	"value": "5",
     	"class": "bg-color-orangeDark"
     },
     "class": {
     	"size": "",
        "color": "bg-color-red"
     },
     "image": {
     	"show": 1,
     	"src": "img/demos/demo1.png",
     	"class": ""
     }
    }
  ];
});