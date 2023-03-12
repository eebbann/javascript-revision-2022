const website = {
	name : 5,
	license : "MIT",
	program : "github",
	set sayHello(value){ // set value
	return this.name = value
	},
	get heloMan(){
		return "pop";
	}
}

console.log(website.hasOwnProperty('name')) // hasOwnProperty returns boolean

console.log(website.hasOwnProperty('license') ? website.name : "false") // hasOwnProperty with terinary operator
 
//using in
console.log(('hasOwnProperty' in website)) // with in it returns all object properties including inherited properties

////////////////////////////////////////////////////////////////

//methods in object properties
website.sayHello = "popular"
console.log(website.name );
console.log(website.heloMan );


