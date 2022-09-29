// scope is the accesibility of variable which can be declared	inside class method or block

var name = "loki";
if (name === "lokpi") {
	var dep = "engineer";
	return "engine";
}

// scope exercises
var top = 10;
var inner = 45; //global variable scope

function foo() {
	var inner = 20; //local variable scope
	// console.log(inner);
}
// console.log(inner); // console.log will print global cus can access local variables
foo();

(function loc( ) {
var a =20
var b = 9
// console.log(a + b);
 }( )) //IIFE  immediately invoke  function
 

//  IIFE: is to avoid global funtion

 
// console.log(`hey ${foon}`)

 //exercise

function inn(){
	let c = b
	console.log(c)
	let b = 23
}
inn() 