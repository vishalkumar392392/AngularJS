var app = angular.module("mainApp", []);

app.controller("rangeLoops", function ($scope) {
  var range = new Array(100);
  $scope.range = range;
});
