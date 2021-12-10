//condition statement A-Z

// if statement check this on browser console

if (1 !== 1) {
	console.log("1 is not equal to 1");
}
else {
	console.log("1 is equal to 1");
}


// if statement with given value to use in condition

var age = 20;
if (age >= 18) {
	console.log("You are an adult");
}

//checking even numbers using if statement

let number = 10;
if (number % 2 === 0) { // to check odd number use 2 !== 0
	console.log("Number is even");
}
else {
	console.log("Number is odd");
}

// else if statement to check age

var age = 20;

if (age >= 18) {
	console.log("You are an adult");
}
else if (age >= 13) {  // note else if only valid if theres and if before it 
	console.log("You are a teenager");
}
 
//if, elseif and else statement
//ps: else runs when all condition stated doesn't work 

let rating = 3;
if (rating === 1) {
	console.log("Bad");
}
else if (rating === 2) {
	console.log('good')
}
else { // else statement only runs when all condition stated doesn't work
	console.log('great work')
}

//... nesting conditionals inside conditions
// check line 100 for better way of doing this

let password= 'wes mmm ' ;
if (password.length >= 8) { // if password length is greater than 8
	if (password.indexOf(' ') === -1) {// if password doesn't have space .. 
		console.log('password is valid');
	} else {// else statement
		console.log('password is long enough but contains spaces');
 }
}else{// else statement
	console.log('password is invalid');
}
 
// truthy and falsy values (boolean values)
// every value has a truthiness and falsy value in them

let grade = '3';
 if (grade) {
	 console.log('condition is true');
 }
 else{
	 console.log('condition is false');
 }
 // falsy values : false, 0, '', null, undefined, NaN
 //better example using login page

 let loggedIn = 'eebann';
 if (loggedIn) {
	 console.log('you are logged in');
 }else{
	 console.log('you are not logged in');
 }
 //opposite example to give falsy value
 let logged = null;
 if (logged) {
	 console.log('you are logged in');
 }	else{
	 console.log('you are not logged in');
 }

 // Logical Operations :&&(And), ||(or), !(not)
 // && : both conditions must be true
 // || : one condition must be true
 // ! : opposite of the condition
//using pass instead of password because password has already been declared
 let pass = 'westMan';
 if(pass.length >= 5 && pass.indexOf(' ') === -1){
	 console.log('valid password');
 }
 else {
	 console.log('not that valid')
 }
 //using || (or) operation:  just need one condition to be true 
 //let pass = 'westMan'; already declared up so no need to declare again
 if(pass.length >= 5 || pass.indexOf(' ') === -1){ // theres a better way to chain multiple  || condition we discuss in future
	 console.log('yes ninja  valid password');
 }
 else {
	 console.log('not that valid')
 }
 //using !(not) operation: opposite of the condition
 //let pass = 'westMan'; already declared up so no need to declare again
 if(!pass.length >= 5 && pass.indexOf(' ') === -1){ // you can use 0 instead of -1
	 console.log('valid password');
 }
 else {
	 console.log('not that valid')
 }
//another example
let loggedInUser ;
if(!loggedInUser){	// if loggedInUser is not true
	console.log('shinobi please login');
}
//another example
let flavour = 'chocolate';
if(flavour !== 'grape' && flavour !== 'orange'){	// if loggedInUser is true
	console.log('need me some flavour');
}
// another way to write the above example
if (!(flavour == 'milky' || flavour == 'orange')){ // if flavour is not equal to grape or orange
	console.log('get me a flavour');
}



// Switch statement
// switch statement is used to check a condition and execute a block of code
let day = 2;
switch (day) {
	case 1:
		console.log('Monday');
		break;// break statement to stop the execution of the code if the condition is true
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
		default: // if none of the conditions are true
			console.log('not a valid day');
}


//TERNARY OPERATOR
// called ternary because they are three pieces 

let num = 7
//if (num > 5) {
//	console.log('num is greater than 5');
//}
//else {
//	console.log('num is less than 5');
//}
//for ternary operator we use ? and :
num === 5 ? console.log('num is 5') : console.log('num is not 5');

// example 2
let status = 'offline';	
let color = status  == 'offline ' ? 'red' : 'green';
// using if 
//let color ;
// if (status === 'online') {
// 	color = 'green';
// }else {
// 	color = 'red';
// }

