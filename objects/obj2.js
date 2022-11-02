// const per =(name, age,salary,tax)=>{
// let person1 = {
// 	name: name,
// 	age:age,
// 	salary:salary,
// 	tax:tax,
// 	netWorth: function(){
// 		return this.salary + this.tax
// 	}

// }
// let expl = `hello suckers ${person1.name} from ${person1.age} ${person1.netWorth()}`
// let result = 0
// for(const index in expl){
// 	console.log(Number(index) + 1)
 
// return expl 

// }
// console.log(per("popo", 90,900,98))

//
// const sumArray =(numbers)=>{
// 	let result = {}
// 	//for loop
// 	for (let index of numbers){
// 		console.log(index)
// 		if(result > index){ 
// 		result = index
// 		} 
// 	}
// 	//  console.log(result)
// 	return {result}
	
// }
// let num = [1,2,3,4]
// sumArray(num)

// const freq = (x)=>{
// // set the value of x to the frequency
// let frequency ={}//{prop:"value"}

// // looping through the values in the array
// for (let letters of x) {
// 	if(letters in frequency){
//    return frequency[letters] = frequency[letters] + 1
// 	}
// 	else{
// 		frequency[letters]= 1

// 	}
// }
// return frequency
// }
// console.log(freq("p o psn sjdb"))

// const complete = (sentence)=>{
// 	let obj = {}
// 	let arr = sentence.split(' ')
	
// 	 for( word of arr ) {
// 		if (word in obj){
// 			obj[word] += 1
// 		}
// 		else{
// 			obj[word] = 1
// 		}
// 	 }
// 	 console.log(obj)
// }


// complete("hello man hello man man man")


function sorted(word){
	//check if sorted
	let sort = word.sort();
	if(word === sort){
		return true
	} else return false
}
sorted([0,4,3,2])