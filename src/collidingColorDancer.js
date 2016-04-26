var CollidingColorDancer = function(top, left, timeBetweenSteps){
	SolidDancer.call(this, top, left, timeBetweenSteps);
	this.colors = ['blue', 'red', 'yellow', 'green', 'white'];
	this.colorIndex = Math.floor(Math.random()*this.colors.length)
	this.color = this.colors[this.colorIndex];

};

CollidingColorDancer.prototype = Object.create(SolidDancer.prototype);
CollidingColorDancer.prototype.constructor = CollidingColorDancer;
CollidingColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // check for collisions
  for (var i = 0; i < window.dancers.length; i++) {
    if (this !== window.dancers[i] && this.checkCollision(window.dancers[i])) {
      this.leftVelocity = -this.leftVelocity;
      this.topVelocity = -this.topVelocity;
      this.colorIndex = (this.colorIndex+1)%this.colors.length;
      this.color = this.colors[this.colorIndex];
    }
  }
  this.$node.css('border-color', this.color);
};