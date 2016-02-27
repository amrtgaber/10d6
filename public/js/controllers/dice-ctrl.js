angular.module('10d6')
  .controller('diceCtrl', function($scope) {
    $scope.dice = [];
    $scope.dice.push(new Dice(6));

    $scope.addSingleDice = function(sides) {
      $scope.dice.push(new Dice(sides));
      $scope.singleDice = {}; // clear input field
    };

    $scope.addMultiDice = function(number, sides) {
      for (var i = 0; i < number; i++) {
        $scope.dice.push(new Dice(sides));
      }
      $scope.multiDice = {}; // clear input field
    };

    $scope.removeDice = function(index) {
      $scope.dice.splice(index, 1);
    };

    $scope.removeAllDice = function(index) {
      $scope.dice = [];
    };

    $scope.rollAll = function() {
      $scope.dice.forEach(function(element) {
        element.roll();
      });
    };
  });
