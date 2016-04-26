
var colorfulDancer = function(top, left, timeBetweenSteps) {
  this.colors = ['red', 'blue', 'green', 'yellow'];
  this.currentColor = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);

};

colorfulDancer.prototype = Object.create(makeDancer.prototype);
colorfulDancer.prototype.constructor = colorfulDancer;
colorfulDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.currentColor = (this.currentColor + 1) % 3;
  var color = this.colors[this.currentColor];
  var styleSettings = {
    'border-color': color,
  };
  this.$node.css(styleSettings);

};