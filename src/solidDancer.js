var SolidDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('solid-dancer');
  window.solidDancers.push(this);
};

SolidDancer.prototype = Object.create(makeDancer.prototype);
SolidDancer.prototype.constructor = SolidDancer;
SolidDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  for (var i = 0; i < window.solidDancers.length; i++) {
    if (this !== window.solidDancers[i] && this.checkCollision(window.solidDancers[i])) {
      this.leftVelocity = -this.leftVelocity;
      this.topVelocity = -this.topVelocity;
    }
  }

};
SolidDancer.prototype.checkCollision = function(OtherDancer) {
  var xDistance = this.left - OtherDancer.left;
  var yDistance = this.top - OtherDancer.top;

  var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (totalDistance < 80) {
    return true;
  } else {
    return false;
  }
};