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

// firstli[2].setAttribute("id", " ") ;
// console.log(firstli[0]);
// firstli[0].classList.add('bog');


// console.log(firstli)

const parent = document.querySelector('ol');
const listItems = [];

for(let i = 0; i< 3; i++){
 const li = document.createElement('li');
 li.textContent = `List item with i=${i}`
 listItems.push(li)
}
parent.append(...listItems)
// /

const button = document.getElementById('button')

const scroll = document.getElementById('scrollable')

button.addEventListener('dragstart', (e) => {
	console.log(e)
	button.style.background="green";
	button.style.color="white"
})

scroll.addEventListener('drop', () =>{
scroll.prepend(button)
scroll.style.backgroundColor ="red";
scroll.style.padding = "10px"
})

scroll.addEventListener('dragover',(e)=>{
	e.preventDefault()
})
scroll.addEventListener('click',(e)=>{
 if(e.target !== this){
	e.target.textContent = "clicked"
 }
})