angular.module('10d6')
  .controller('diceCtrl', function($scope) {
    $scope.dice = [];
    $scope.dice.push(new Dice(6));
    $scope.showActions = false;

    $scope.addSingleDice = sides => {
      $scope.dice.push(new Dice(sides));
      $scope.singleDice = {}; // clear input field
      $scope.$emit('stats');
    };

    $scope.addMultiDice = (number, sides) => {
      for (var i = 0; i < number; i++) {
        $scope.dice.push(new Dice(sides));
      }
      $scope.multiDice = {}; // clear input field
      $scope.$emit('stats');
    };

    $scope.removeDice = index => {
      $scope.dice.splice(index, 1);
      $scope.$emit('stats');
    };

    $scope.removeAllDice = index => {
      $scope.dice = [];
      $scope.$emit('stats');
    };

    $scope.rollAll = () => {
      $scope.dice.forEach( die => die.roll() );
      $scope.$emit('stats');
    };

    $scope.takeSum = () => {
      if ($scope.dice.length === 0) {
        $scope.sum = 0;
        return;
      } else {
        $scope.sum = $scope.dice
          .map( die => die.getResult() )
          .reduce( (prev, curr) => prev + curr );
      }
    };

    $scope.takeHighest = () => {
      if ($scope.dice.length === 0) {
        $scope.highest = 0;
      } else {
        $scope.highest = $scope.dice
          .map( die => die.getResult() )
          .reduce( (prev, curr) => {
            if (prev > curr) {
              return prev;
            } else {
              return curr;
            }
          });
      }
    };

    $scope.takeLowest = () => {
      if ($scope.dice.length === 0) {
        $scope.lowest = 0;
        return;
      } else {
        $scope.lowest = $scope.dice
          .map( die => die.getResult() )
          .reduce( (prev, curr) => {
            if (prev < curr) {
              return prev;
            } else {
              return curr;
            }
          });
      }
    };

    $scope.toggleShowActions = () => $scope.showActions = !$scope.showActions;

    $scope.$on('stats', $scope.takeSum);
    $scope.$on('stats', $scope.takeHighest);
    $scope.$on('stats', $scope.takeLowest);
    $scope.$emit('stats');
  });
