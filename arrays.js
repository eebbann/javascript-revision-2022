//arrays : ordered, changeable, indexed, can contain multiple data types
console.log('***********welcome to arrays in javascript************');
let colors = ["red", "blue", "green"];
console.log(colors);

let data =[1,3,'man','woman']
console.log(data)

// changing a property in an array

let shoppingList	= ['cheddar cheese','milk' ] 

shoppingList[1] = 'whole milk' //not the index are counted from 0

console.log(shoppingList)

// what if the data of the shopping list is unknown and you want to add a data to the end of the list
// in this case we can use lenth property

shoppingList[shoppingList.length] = 'bread' //adding a new item to the array end
shoppingList[shoppingList.length] = 'butter' //adding a new item to the array end
console.log(shoppingList) //note the length property is the number of items in the array


//Array methods note: .length property is not a method
//method : Push to add a new item to the end of the array

let songs = ['song1','song2','song3']
songs.push('song4') // arrays are mutable unlike strings which are immutable
console.log(songs)

//method : pop to remove the last item from the array
//opposite of push
songs.pop()
console.log(songs);
let man = []
songs.pop

//method: shift to remove from the first array 
let  dishesToDo = ['plates','spoon','knives']
dishesToDo.shift()
console.log(dishesToDo)
//unshift method
dishesToDo.unshift('mug','bowl');
console.log(dishesToDo) //can add more than one data at a time also with push

//method: concat- to combine multiple arrays
let colors1 = ['red','blue','green']
let colors2 = ['yellow','orange','pink']
let colors3 = colors1.concat(colors2)
console.log(colors3)

//example 2
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const array4 = array1.concat(array2, array3);

console.log(array4);

//method : includes to check if an array contains a specific value - returns true or false
let colors4 = ['red','blue','green','black','orange','pink']
console.log(colors4.includes('red'))  //returns true
console.log(colors4.includes('yellow')) //returns false
//to be specific in includes add a second parameter to the method
console.log(colors4.includes('red',0)) //returns true because the first parameter is the index

//method:  indexOf to find the index of a specific value returns the index of the value
console.log(colors4.indexOf('red')) //returns 0
console.log(colors4.indexOf('yellow')) //returns -1
//to be specific in indexOf add a second parameter to the method
console.log(colors4.indexOf('blue',0)) //returns 1 because the 2nd parameter is the index

//next method: reverse to reverse the order of the array
let colors5 = ['red','blue','green','black','orange','pink']
console.log(colors5)
console.log(colors5.reverse())
//join method
let colors6 = ['red','blue','green','black','orange','pink']
console.log(colors6.join(' ')) //returns a string
console.log(colors6.join('-')) //returns a string