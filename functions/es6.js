//es6 arrow functions

let numbers = [123,344,312,123,233,908]
let names = ['alex','paul', 'hung','pete','lex']

let num = numbers.filter(x => x > 113) //using callback arrow function 

console.log(num)


//using two parameters  for arrow functions

let number2 = numbers.forEach((item,index)=> console.log(item, index)) 
// with two parameters for arrow functions use brackets notation

//TIPS AND GOTCHAS
 const f1 = (param) => param ; // note this returns a given argument even without the return 
 console.log(f1(09))

 const f2 = (param)=> {   param} ;  
 console.log(f2('er')) // this will run undefine because using curly brackets you need return keyword

 //using underscore when theres no arguments
 const vim = 89
 const f4 = _ => vim ; // underscore replaces  empty params can use () instead
 console.log(f4())

 // returning objects in arrow functions

const profile={
	"id":09,
	"name":'jum',
	"age":32,
}

const func = (prof)=> ({prof}) //notice for returning objects in arrow functions you and brsckets and curly brackets
console.log(func(profile))