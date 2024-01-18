//complete this code
class Rectangle {
	constructor(width,height){
		this.width2=width
		this.height2=height
	}
	get width(){
		return this.width2
	}
	get height(){
		return this.height2
	}
	getArea(){
		return this.width2*this.height2;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
	}
	getPerimeter() {
		return 4*this.width2
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
