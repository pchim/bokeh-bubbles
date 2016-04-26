var DynamicBG = function(){
	this._timeBetweenSteps = 100;
  this.$node = $('<div class="sky"></div>');
  this.startPerc = 5;
  this.endPerc = 40;
	this.step();
	this.sun = 'rise';
}

DynamicBG.prototype.step = function(){
	var color = 'linear-gradient(hsl(185, 100%, ' + this.startPerc + 
							'%), hsl(185, 100%, ' + this.endPerc + '%))';
	var styles = {
		background: color
	}
	this.$node.css(styles);
	if (this.sun === 'rise'){
		if (this.startPerc+0.2 <= 40){
			this.startPerc += 0.2;
		} else if (this.endPerc+0.2 <= 40) {
			this.endPerc += 0.2;
		} else {
			this.sun = 'set';
		}
	} else if (this.sun === 'set'){
		if(this.startPerc-0.2 >= 5){
			this.startPerc -= 0.2;
		} else if (this.endPerc-0.2 >= 5){
			this.endPerc -= 0.2;
		}	else {
			this.sun = 'rise';
		}		
	}

	setTimeout(this.step.bind(this), this._timeBetweenSteps);
}