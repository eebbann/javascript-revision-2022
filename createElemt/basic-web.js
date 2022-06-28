//querySelector shortcuts
//document.createElement -- adding elemnt from javascript to html
//document.createTextnode -- adding text to html
//appendChild --adding a node to an Element

let main = document.querySelector('.main');
let h2 = main.querySelector('h2')

h2.textContent="loading the main javascript"

let p = main.querySelector('p')
p.innerHTML = 'Total list of <strong>Movies </strong>:'

let ul = document.createElement('ul')
main.appendChild(ul); 

movies.forEach(function(item){
	let li = document.createElement('li')
	let txt = document.createTextNode(item)
	li.appendChild(txt)
	ul.appendChild(li)
	console.log(txt)
})

//elements and nodes
main.children
ul.children
let l2 = h2.firstElementChild;
let ul2 = l2.previousElementSibling  