
//spread operaton
let user1 = ['name', 'age', 'pop']

const user2 = ['jest','poll','milk']
 

let user = "make,let,kik"


const mergedUsers = [...user1, ...user2];
console.log(mergedUsers)

user1 = [...user1, 'plantain']
console.log(user1)

//arrayof
let c = Array.of(1,2,3)
let coke = Array.of(user).join('').split(',')
let d = user.split(',')
console.log(d)

//find method

let spec = user1.find(text => text.length > 3)
let s = user1.find(text => text.lengt > 3)	
console.log(s)