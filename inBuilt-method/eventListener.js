
//document.body.childNodes[1] ----time consuming 
//so we use document.getElentbyID or classNAme or decument.querySelector 
//document.getElementById()

const btnn = document.getElementById('btn'); //using querySelector
//you can use getElementByID aswell 
let b = document.querySelector('body');
console.log(b);
btnn.addEventListener('click', handleChange);
function handleChange() {
	b.style.background = "yellow";
	b.style.color = "black";
	console.log(b);
	innerText.style.color = "red";
}
 
//--2
//adding text to dom
let tet = document.createTextNode("pop that mega me");
let hh = document.getElementById('texty');

hh.appendChild(tet)

