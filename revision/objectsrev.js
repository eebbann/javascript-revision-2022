
let bo
const website = {
	author: 'John',
	dev: false,
	"language prog": "java"
};
website.foo = "red"

console.log(website);

//delete website
delete website.foo
console.log(website);

//object comparison
console.log({}==={}); //false 
console.log(website===website) //true declared object

//shorthand objects
let man = 'ope'

let people = {
	man  // same as=>  man : man(the variable up)
}
console.log(people)

let woman = "lailai"

let her = {
	woman // same as=> woman :woman(the variable up)
}
console.log(her)

// function constructor
 function meal (drink, food, protein){

	this.drink = drink,
	this.food = food,
	this.protein = protein
 }

 let lailai = new meal('zobo', 'rice', 'fish');
 let lala = new meal('kunu', 'beans', 'chicken');

 console.log(lailai);
 console.log(lala);

 //symbols
 const id = Symbol('id')
 const id2 = Symbol('id2 ')


 const obj ={
	[id]: 123,
	[id2]:'hello'
 }
 
 
