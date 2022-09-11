//es6 arrow functions

let numbers = [123,344,312,123,233,908]
let names = ['alex','paul', 'hung','pete','lex']

let num = numbers.filter(x => x > 113) //using callback arrow function 

console.log(num)


//using two parameters  for arrow functions

let number2 = numbers.forEach((item,index)=> console.log(item, index)) 
// with two parameters for arrow functions use brackets notation

//TIPS AND GOTCHAS

