var ConductorDancer = function(top, left, timeBetweenSteps){
	SolidDancer.call(this, top, left, timeBetweenSteps);
	this.$node.addClass("conductor");
	this.conductor = true;
};

ConductorDancer.prototype = Object.create(SolidDancer.prototype);
ConductorDancer.prototype.constructor = ConductorDancer;
// SolidDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);

//   for (var i = 0; i < window.musicDancers.length; i++) {
//     if (this !== window.musicDancers[i] && this.checkCollision(window.musicDancers[i])) {
//       musicDancers[i].
//     }
//   }

// };