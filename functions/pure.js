//can be called anytime withoout side effects 

let f_pure = function(_input){
	let _output = _input.toUpperCase();
	return _output
}
let str = "kevin samuel"
let out = f_pure(str)

console.log(out)  

// impure function 

let impure = function(){

	str = _output // affected by an outsider .. so this is not pure function
	console.log(str)
	return _output
}