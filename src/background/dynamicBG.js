var DynamicBG = function(){
	this._timeBetweenSteps = 100;
  this.$node = $('<div class="sky"></div>');
  this.startPerc = 5;
  this.endPerc = 40;
  this.startHue = 0;
  this.endHue = 185;
  this.changeRate = 0.5;
	this.step();
	this.sun = 'rise';
	this.green = 255;

};

DynamicBG.prototype.step = function(){
	var color = 'linear-gradient(hsl(185, 100%, ' + this.startPerc + 
							'%), hsl(' + this.endHue + ', 100%, ' + this.endPerc + '%))';
	var styles = {
		background: color
	}
	this.$node.css(styles);
	if (this.sun === 'rise'){
		if (this.endPerc+this.changeRate <= 40){
			this.endPerc += this.changeRate;
			// if (this.endHue <= 185){
			// 	this.endHue += 5;
			// }
		} else if (this.startPerc+this.changeRate <= 40) {
			this.startPerc += this.changeRate;
		} else {
			this.sun = 'set';
		}
	} else if (this.sun === 'set'){
		if(this.endPerc-this.changeRate >= 5){
			this.endPerc -= this.changeRate;
		} else if (this.startPerc-this.changeRate >= 5){
			this.startPerc -= this.changeRate;
		}	else {
			this.sun = 'rise';
			//this.endHue = 0;
		}		
	}

	setTimeout(this.step.bind(this), this._timeBetweenSteps);
};