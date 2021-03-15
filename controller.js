var app = angular.module("mainApp", ["ngRoute"]);

// app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/", {
//       template: "Welcome User",
//     })
//     .when("/anotherPage", {
//       template: "Again Welcome User",
//     })
//     .otherwise({
//       redirectTo: "/",
//     });
// });

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "form.html",
    })
    .when("/dashboard", {
      resolve: {
        check: function ($location, $rootScope) {
          if (!$rootScope.loggedIn) {
            $location.path("/");
          }
        },
      },
      templateUrl: "dashboard.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("loginCtrl", function ($scope, $location, $rootScope) {
  $scope.submit = function () {
    $rootScope.uname = $scope.username;
    $rootScope.password = $scope.password;
    if ($scope.username == "admin" && $scope.password == "admin") {
      $rootScope.loggedIn = true;
      $location.path("/dashboard");
    } else {
      alert("Wrong credentials");
    }
  };
});
