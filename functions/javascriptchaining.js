// using arrow function to chain functions

let people = [
	{ name: 'Bob', age: 31, email: 'Boby@maample.com'},
	{ name: 'John', age: 21, email: 'john@mple.com' },
	{ name: 'jones', age: 31, email: 'jones@ample.com'},
	{ name: 'Bob', age: 21, email: 'Bob@maample.com' },
	
]

let replicas = people.filter(function(person){
	return person.email.indexOf( '@maample.com' ) > -1;
	 

}).map(function(person){
	return person.email
}
	)



// console.log(replicas)

//now arrow function chaining

let great = people.filter(x=>x.email.search("Bob") ).map(x=> x.email)


console.log(great)