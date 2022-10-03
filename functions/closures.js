//closure is the enclosing of functions which has access to its lexical scope. 
function outer(){
	var b = 90;
	function inner(){
		console.log(b + 8)
	}
 return inner; // returns a fuction 
}

outer()
 

//closures in callbacks
var a = 10

var fn = function(){
	// console.log(a + 8)
}
setTimeout(fn, 3000)

for(var i = 0; i <= 9; i++) {
		setTimeout(function() {
			console.log(i )
		},i * 2000)
}


///
var i;
var print = function (){}