//map using arror
const arr =[1,3,2,4]

const double = arr.map(x =>{  return x * 2;  })
console.log(double.join(","));


//array desrtucturing
 
 const [,a,b] = arr

 console.log("pop", a,b);

 //oobjects Destructure

 function name(f,l,...m){

	console.log(...m.join(""))
 }

 name("kjn","lok","s","z","ok",2,3,4)
 
 //spread
 const arg = [2,3,5,4,23,11]
 const wey = [21,2,1,2,3,4]
 const combine = [...arg, "hello", ...wey]

 console.log(combine) // scpread used as array concatenation

  //??
	const mi = "null";
	 mi ?? console.log("pop")
	 
	 //optional chaining
	 const person = {

	 }
	 console.log(person?.company?.website ?? 'foo')

