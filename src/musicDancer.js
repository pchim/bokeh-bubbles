var MusicDancer = function(top, left, timeBetweenSteps){
	ClearDancer.call(this, top, left, timeBetweenSteps);
	var numSounds = $(".sounds").length;
	console.log(numSounds);
	this.musicIndex = Math.floor(Math.random()*numSounds);
	this.audio = $(".sounds")[this.musicIndex];
	this.$node.append(this.audio.cloneNode(true));
	console.log(this.musicIndex);
	console.log(this.audio);

};


MusicDancer.prototype = Object.create(ClearDancer.prototype);
MusicDancer.prototype.constructor = MusicDancer;
MusicDancer.prototype.setHover = function() {
  ClearDancer.prototype.setHover.call(this);
  var audio = this.$node.find(".sounds")[0];
  this.$node.hover((function() {
    this.$node.find(".sounds")[0].play();
  }).bind(this),
  (function() {
    this.$node.find(".sounds")[0].pause();
  }).bind(this));

};

MusicDancer.prototype.step = function() {
  ClearDancer.prototype.step.call(this);
  for (var i = 0; i < window.dancers.length; i++) {
  		var audio = this.$node.find(".sounds")[0];
	    if (this !== window.dancers[i] && this.checkCollision(window.dancers[i])) {
	      if (window.dancers[i].conductor){	    	
	    	  if (audio.paused){
	    	  	this.$node.css({opacity: 0.3});
	    	 	  audio.play();
	    	  } else {
	    	  	this.$node.css({opacity: 0.6});
	     	    audio.pause();
	        }
	      }
  	  }
  }
};

MusicDancer.prototype.checkCollision = function(OtherDancer) {
  var xDistance = this.left - OtherDancer.left;
  var yDistance = this.top - OtherDancer.top;

  var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (totalDistance < 100) {
    return true;
  } else {
    return false;
  }
};

