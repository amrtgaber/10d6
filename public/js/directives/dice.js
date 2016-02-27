angular.module("10d6")
  .directive("dice", function() {
    return {
      restrict: "E",
      templateUrl: "templates/dice.html",
      scope: {
        die: '=',
        index: '=',
        remove: '&'
      },
      controller: function($scope) {},
      link: function(scope, element, attrs) {}
    };
  });
