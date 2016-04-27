// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this._timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.top = top;
  this.left = left;
  this.topVelocity = 2 * (Math.random() < 0.5 ? -1 : 1);
  this.leftVelocity = 2 * (Math.random() < 0.5 ? -1 : 1);
  this.radius = 20 + Math.random()*30;
  this.growthSpeed = 0.01; //Math.random()*2;
  this.grow = true;
  this.step();

  this.size = Math.random() * 50 + 200;
  this.$node.css({
    height: this.size,
    width: this.size,
    'border-radius': this.size,
  });

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.center = [this.top+(this.size/2), this.left+(this.size/2)];
  console.log(this.size);

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

  this.center = [this.top+(this.size/2), this.left+(this.size/2)];
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

// check collisions
makeDancer.prototype.checkCollision = function(OtherDancer) {
  var xDistance = this.center[1] - OtherDancer.center[1];
  var yDistance = this.center[0] - OtherDancer.center[0];
  var maxDistance = (this.size/2) + (OtherDancer.size/2);

  var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (totalDistance < maxDistance) {
    console.log(totalDistance, ' ', maxDistance);
    return true;
  } else {
    return false;
  }
};






