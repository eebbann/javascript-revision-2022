const house={
	doors: "german",
	location: "lagos",
	room: 9,
	kitchen: 2,
	dogs: 4
}

const obj={
	foo: 'bar',
	__proto__: house
}

// console.log(Object.keys(obj)) 
// console.log(Object.values(obj)) 
 Object.entries(obj).forEach(function( i ,index){
	console.log( index)
}
) 

for (keys in obj){
	console.log(keys)
}


