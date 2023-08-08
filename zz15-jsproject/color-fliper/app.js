const colors =["green","yellow","red","pink","brown", "gray","emerald", "gold", "orange","black"]

let btn = document.querySelector('#btn')
let color = document.querySelector(".color")

btn.addEventListener('click', function(){
  //get random number bebtween 0 and 3
	
	const random = Math.floor(Math.random()*colors.length);
  document.body.style.background=colors[random]
	color.textContent=colors[random]
	
})