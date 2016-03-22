angular.module('10d6')
  .controller('diceCtrl', function($scope) {
    $scope.dice = [];
    $scope.dice.push(new Dice(6));

    $scope.testSwipe = () => {
      console.log('swiped');
    }

    $scope.addSingleDice = function(sides) {
      $scope.dice.push(new Dice(sides));
      $scope.singleDice = {}; // clear input field
      $scope.$emit('stats');
    };

    $scope.addMultiDice = function(number, sides) {
      for (var i = 0; i < number; i++) {
        $scope.dice.push(new Dice(sides));
      }
      $scope.multiDice = {}; // clear input field
      $scope.$emit('stats');
    };

    $scope.removeDice = function(index) {
      $scope.dice.splice(index, 1);
      $scope.$emit('stats');
    };

    $scope.removeAllDice = function(index) {
      $scope.dice = [];
      $scope.$emit('stats');
    };

    $scope.rollAll = function() {
      $scope.dice.forEach(function(element) {
        element.roll();
      });
      $scope.$emit('stats');
    };

    $scope.takeSum = function() {
      if ($scope.dice.length === 0) {
        $scope.sum = 0;
        return;
      } else {
        $scope.sum = $scope.dice
          .map(function(die) {
            return die.getResult();
          })
          .reduce(function(prev, curr) {
            return prev + curr;
          });
      }
    };

    $scope.takeHighest = function() {
      if ($scope.dice.length === 0) {
        $scope.highest = 0;
      } else {
        $scope.highest = $scope.dice
          .map(function(die) {
            return die.getResult();
          })
          .reduce(function(prev, curr) {
            if (prev > curr) {
              return prev;
            } else {
              return curr;
            }
          });
      }
    };

    $scope.takeLowest = function() {
      if ($scope.dice.length === 0) {
        $scope.lowest = 0;
        return;
      } else {
        $scope.lowest = $scope.dice
          .map(function(die) {
            return die.getResult();
          })
          .reduce(function(prev, curr) {
            if (prev < curr) {
              return prev;
            } else {
              return curr;
            }
          });
      }
    };

    $scope.$on('stats', $scope.takeSum);
    $scope.$on('stats', $scope.takeHighest);
    $scope.$on('stats', $scope.takeLowest);
    $scope.$emit('stats');
  });
