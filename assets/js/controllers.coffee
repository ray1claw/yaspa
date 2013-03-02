"use strict"

# Controllers
window.AppCtrl = ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"

window.MyCtrl1 = ->
window.MyCtrl2 = ->
MyCtrl1.$inject = []
MyCtrl2.$inject = []
