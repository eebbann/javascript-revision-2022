const secondLi= document.getElementById('second-li');
const firstli = document.querySelectorAll('li'); // queryselector for single .. queryselectorAll for multiple (as arrays)

// console.log(firstli);
// console.log(secondLi)

//using for each
// firstli.forEach(element => {
// 	// console.log(element)
	
// });

//to use map
// array.from(firstli).map(element => {
// console.log(element )
	 
// });

firstli[2].setAttribute("id", " ") ;
console.log(firstli[0]);
firstli[0].classList.add('bog');


console.log(firstli)