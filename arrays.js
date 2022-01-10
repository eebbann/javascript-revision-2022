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

//.reverse() method	
//reverses the order of the array
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
numbers.reverse();
console.log(numbers);// returns 10,9,8,7,6,5,4,3,2,1

//.join() method
//joins the array into a string
let numbers2 = ['a', 'b', 'c', 'd', 'e'];
console.log(numbers2);
let string = numbers2.join('-'); //. is the separator
console.log(string);

//.slice() method 
//returns a new array
let numbers3 = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers3);
let newArray = numbers3.slice(2,5); //start at index 2 and end at index 5
console.log(newArray);

//.splice() method
//splice() is used to remove or add elements to an array
let numbers4 = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers4);
numbers4.splice(2,3); //start at index 2 and remove 3 elements
console.log(numbers4);
//adding array elements
let numbers5 = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers5);
numbers5.splice(2,0,...numbers4); //start at index 2 and add 3 elements
console.log(numbers5);

let food = ["apple", "banana", "orange"];
let vegetable2 = food.splice(1,1,"carrot"); //start at index 1 and add 1 element
console.log(food);
console.log(vegetable2);



