//condition statement

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

let password= 'wes mmm ' ;
if (password.length >= 8) { // if password length is greater than 8
	if (password.indexOf(' ') === -1) {// if password doesn't have space ..the space between password does not count
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