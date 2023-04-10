const btn = document.getElementById('open-btn');
const modal = document.querySelector('.model-container');
const close = document.querySelector('#close');

 

btn.addEventListener('click', ()=>{
   modal.style.display= 'block'; 
})
close.addEventListener('click', ()=>{
	modal.style.display= 'none'; 
})
// window.addEventListener('click', ()=>{
// 	modal.style.display= 'none'; 
// })


