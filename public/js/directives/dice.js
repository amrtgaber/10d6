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
      controller: function($scope) {
        $scope.roll = function() {
          $scope.die.roll();
          $scope.$emit('stats');
        };

        $scope.setSides = function(sides) {
          $scope.die.setSides(sides);
          $scope.newDie = {};
          $scope.$emit('stats');
        };
      },
      link: function(scope, element, attrs) {}
    };
  });
