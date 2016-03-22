angular.module("10d6")
  .directive("dice", ['$animate', '$timeout', function($animate, $timeout) {
    return {
      restrict: "E",
      templateUrl: "templates/dice.html",
      scope: {
        die: '='
      },
      controller: function($scope) {
        $scope.setSides = function(sides) {
          $scope.die.setSides(sides);
          $scope.newDie = {};
          $scope.$emit('stats');
        };
      },
      link: function(scope, element, attrs) {
        scope.roll = () => {
          scope.die.roll();
          scope.$emit('stats');
        }
      }
    };
  }]);
