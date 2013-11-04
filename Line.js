function Line(){
	this.p1 = null;
	this.p2 = null;
	
}

Line.prototype.getVector = function(){
	var x = this.p2.x - this.p1.x;
	var y = this.p2.y = this.p21.y;

	return {
		x:x,
		y:y,
		root: this.p1,
		length: Math.sqrt(x*x + y*y)
	};
}

Line.prototype.contains = function(x, y) {
	if(   x < Math.min(this.handler1.cx,this.handler2.cx) ||
			x > Math.max(this.handler1.cx,this.handler2.cx) ||
			y < Math.min(this.handler1.cy,this.handler2.cy) ||
			y > Math.max(this.handler1.cy,this.handler2.cy))
	return false;
	var dx = this.handler1.cx-this.handler2.cx;
	var dy = this.handler1.cy-this.handler2.cy;
	var tan1 = Math.abs(dy/dx);
	var tan2 = Math.abs((y-this.handler1.cy)/(x-this.handler1.cx));
	return Math.abs(tan1 - tan2) < EPSILON;
}