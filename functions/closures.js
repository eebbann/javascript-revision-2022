//closure is the enclosing of functions which has access to its lexical scope. 
function outer(){
	var b = 90;
	function inner(){
		console.log(b + 8)
	}
 return inner;
}

outer()
 