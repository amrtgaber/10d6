// dice class
var Dice = function(sides) {
  this.sides = sides;
  this.roll();
};

Dice.prototype.roll = function() {
  this.lastResult = Math.ceil(Math.random() * this.sides);
  return this.lastResult;
};

Dice.prototype.getResult = function() {
  return this.lastResult;
};

Dice.prototype.getSides = function() {
  return this.sides;
};

Dice.prototype.setSides = function(sides) {
  this.sides = sides;
};
