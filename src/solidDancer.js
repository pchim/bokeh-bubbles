var SolidDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('solid-dancer');
  //blue,red,green
  this.colors = ['#4993E2', '#EC3630', '#6AD97E'];
  this.size = Math.random() * 10 + 70;
  var currentColor = this.colors[Math.floor(Math.random() * 3)];
  this.$node.css({
    'color': currentColor,
    'background-color': currentColor,
    height: this.size,
    width: this.size,
    'border-raidus': this.size,
  });
  window.solidDancers.push(this);
  console.log(this.size);
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
  if (totalDistance < 40) {
    return true;
  } else {
    return false;
  }
};