
//document.body.childNodes[1] ----time consuming 
//so we use document.getElentbyID or classNAme or decument.querySelector 
//document.getElementById()

const text = document.querySelector('h1')
console.log(text)
text.addEventListener('click', clickMe)
function clickMe(){
	alert('pop it up');
	console.log('pop');
	innerText.style.color ="red"
	
}