const div = document.querySelectorAll('div');


div.forEach((di)=>{
		di.addEventListener('click', clicker)
})
function clicker(){
	alert('clicked me')
}