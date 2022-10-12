//looping is normally common isn lists of items like arrays
//for loop
const fil = ["rice", "yam", "potatoes", "cheese", "meats", "vegetables"];
const fillnth = fil.length;
for (let i = 0; i < fillnth; i += 2) {
	//  console.log(fil[i])
}

// forin
let cat = { pop: "dog", cat: "puppy" };

// for(let prop in cat){
// 	console.log(  cat[prop])
// }

//foreach
// fil.forEach((prop, index, array)=> console.log(index, prop))

//two dimensional array
let twoD = [
	[1, 2, 3, 4, 5, 6, 7, 8],
	[11, 22, 33, 44, 55, 66, 77],
	[21, 32, 43, 54, 65, 78, 98],
];

//nested for loops
let rows = twoD.length;
for (let i = 0; i < rows; i++) {
	let row = twoD[i].length; // lenth of each array array index
	console.log(i, row);

	for (let j = 0; j < row; j++) {
		console.log(twoD[i][j]);
	}
}
