(function () {
  var app = angular.module("todo", []);
  app.controller("TodoCtrl", function ($scope) {
    $scope.todos = [
      {
        title: "필라테스",
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: "앵귤러 학습",
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: "청룡어워즈",
        completed: true,
        createdAt: Date.now(),
      },
    ];
  });
});
