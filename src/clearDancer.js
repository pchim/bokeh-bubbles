
var ClearDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('clear-dancer');
};

ClearDancer.prototype = Object.create(makeDancer.prototype);
ClearDancer.prototype.constructor = ClearDancer;
