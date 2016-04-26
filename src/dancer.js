// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this._timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.top = top;
  this.left = left;
  this.topVelocity = 2;
  this.leftVelocity = 2;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var height = $("body").height();
  var width = $("body").width();
  if (this.top <= 0 || this.top >= height){
    this.topVelocity = -this.topVelocity;
    this.top += this.topVelocity;
  }
  if (this.left <= 0 || this.left >= width){
    this.leftVelocity = -this.leftVelocity;
    this.left += this.leftVelocity;   
  }

  this.top += this.topVelocity;
  this.left += this.leftVelocity;

  this.setPosition(this.top, this.left);
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};