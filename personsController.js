var app = angular.module("mainAppPersons", []);

app.controller("people", function ($scope, $http) {
  $http.get("http://127.0.0.1:5500/database.json").success(function (response) {
    $scope.persons = response.records;
  });
});
