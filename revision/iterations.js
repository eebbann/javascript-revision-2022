const arr = [1,4,5,6,9]

for(let a = 0; a < arr.length ; a++){
	// console.log(arr[a])
	// console.log(a)


}
//use this instead 
  // let i =0
for (const val of arr){
	// console.log(val)
	// console.log(i)
	// i ++
}
   
//foreach
arr.forEach((value,index,a)=>{
	// console.log(value, index)
})

let man = [2,4,5,1,22,44]
let p = man.slice(1,3 )//4 5
man.splice(4,1) // 2 4 5
console.log("pop",p)
console.log(man)

//more working
let fruit = ["mango","pawpaw","apple","orange"]

let fruitty = fruit.join(" ")
console.log("fruitty",fruitty)

let slicy = fruit.slice(0,1) 
console.log("slicy",slicy)
 
fruit.splice(1,0)
console.log("splice",fruit);

let con = fruit.concat(slicy)
console.log(con)

let char = ["i",'a','m','a','b','o','y','f','r','o','m','l','a','g','o','s'] ;
let sentence = char.join('')
console.log(sentence)

