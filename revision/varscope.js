// console.log(mb);
// console.log(vanum);
// var vanum = 0

//array
let ma= new Array() 
ma.length = 12;
ma.fill(8)
// console.log(ma)
// console.log(Array.isArray(ma)) // check if array

//indexOf 
let ru = ma.indexOf(2)
 console.log(ru)
// --------------------

let man = ["ade",9,"yun",10,]

 //slice
let k  = man.slice(0,2,)
  console.log(k)

	//splice
man.splice(0,2,)
  console.log(man)
 
	//array.concat
	const u = man.concat(["nm",3])

	console.log(u)
// reverse

	u.reverse()
	console.log(u)

//join
let z = u.join(",")
console.log(z)