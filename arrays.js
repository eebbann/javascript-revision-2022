//arrays : ordered, changeable, indexed, can contain multiple data types
//data structure comes in array
//array is collection of values into one structure
console.log('***********welcome to arrays in javascript************');
let colors = ["red", "blue", "green"];
console.log(colors);
 
let lotto = [45,12,23,25,34];

console.log(lotto);

//arrays are indexed starting from 0
console.log(lotto[0]);
console.log(lotto[1]);
console.log(lotto[2]);
console.log(lotto[3]);
console.log(lotto[4]);

console.log(lotto.length);

//modifying arrays
//arrays are mutable
let ShoppingList = ["milk", "eggs", "bread", "chips", "soda"];
console.log(ShoppingList);
ShoppingList[1] = "eggs and bread";
console.log(ShoppingList);

//adding to arrays from the end
ShoppingList.push("chocolate");
console.log(ShoppingList);

//removing from arrays from the end
ShoppingList.pop();
console.log(ShoppingList);
const removed = ShoppingList.pop();
console.log(removed); //getting the removed value

//array properties and methods
//.length property
console.log(ShoppingList.length);

//.push() method
ShoppingList.push("chocolate");
console.log(ShoppingList);

//.pop() method	
ShoppingList.pop();
console.log(ShoppingList);

//.shift() method
ShoppingList.shift();
console.log(ShoppingList);

//.unshift() method
ShoppingList.unshift("chocolate");
console.log(ShoppingList);

//other methods
//.concat() method	
//concat is used to join two or more arrays
let newList = ShoppingList.concat(["chocolate", "ice cream"]);
console.log(newList); //new array with two arrays joined together 

//concat two different arrays
let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "tomato", "potato"];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

//includes and indexOf methods
//.includes() method
//returns true or false
console.log(allGroceries.includes("tomato")); //uses boolean value to check if the value is in the array
let fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("banana"));
// returns true because banana is in the array
//fromIndex
console.log(fruits2.includes("banana", 2));
// returns false because banana is not in the array after the index 2

//.indexOf() method
//returns the index of the value
console.log(allGroceries.indexOf("tomato"));//returns the index of the value
//returns -1 because tomato is not in the array
//fromIndex
console.log(allGroceries.indexOf("tomato", 2));

//




