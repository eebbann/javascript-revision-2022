// scope
// a variable defined inside a function can only be accessed through the scope of	the function, 
// the scope will be undefined if the function is not defined inside the function itself.
// a global variable can only be accessed through the scope of the function itself.

const name ="tolu"

 function globe (){
	const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
		
  }
return add()
}
  
 

	console.log(globe())