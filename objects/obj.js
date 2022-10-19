// const circle = {} //  --- onject lliterals syntex
     
const circle ={
	radius: 2,
	location:{
	x:11,
	y:12,},
	draw: function(){
		console.log('pop')
	}

}

circle.draw();


function createCircle(radius){
	return{
		radius:radius,
		draw:function(){
			console.log('draw')
		}
	}
}
createCircle()

//construction function

function createCircle(radius){
		this.radius=radius;
		this.draw=function(){
			console.log("hello" + this.radius);
			return; 
	}
}
createCircle.apply()
 const curve = new createCircle(99)
 console.log(curve.radius);
