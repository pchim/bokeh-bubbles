
var ClearDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('clear-dancer');
  var size = Math.random() * 50 + 200;
  this.$node.css({
    height: size,
    width: size,
    'border-radius': size,
  });
  this.setHover();
};

ClearDancer.prototype = Object.create(makeDancer.prototype);
ClearDancer.prototype.constructor = ClearDancer;
ClearDancer.prototype.setHover = function() {
  this.$node.hover((function() {
    this.$node.css({opacity: 0.6});
  }).bind(this),
  (function() {
    this.$node.css({opacity: 0.3});
  }).bind(this));
};
