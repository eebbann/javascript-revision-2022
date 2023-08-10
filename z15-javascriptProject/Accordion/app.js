const btns = document.querySelectorAll('.question-btn')
// const question  = document.querySelector('.question-text')
 console.log("p")
btns.forEach(function(btn){
btn.addEventListener("click", function(e){
const parent =e.currentTarget.parentElement.parentElement;
parent.classList.toggle("show-text")
})
})