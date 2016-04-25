
var makeHorizontalDancer = function(top, left, timeBetweenSteps) {
  // call superclass
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;

};

makeHorizontalDancer.prototype = Object.create(makeDancer.prototype);
makeHorizontalDancer.prototype.constructor = makeHorizontalDancer;
makeHorizontalDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.left = this.left + 10;
  this.setPosition(this.top, this.left);
};