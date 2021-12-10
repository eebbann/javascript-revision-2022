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
songs.push('song4')
console.log(songs)