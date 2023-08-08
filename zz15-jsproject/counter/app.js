//set initial
let count = 0;
let value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

 btns.forEach(function(btn){
 btn.addEventListener("click", function(e){
		
		const state = e.currentTarget.classList
	 console.log(state)
	 if(state.contains("decrease") & value.innerHTML != 0){
     count --
	 }else if(state.contains("increase")){
		count ++
	 }else if(state.contains("reset")){
		count = 0
	}
	 value.innerHTML = count
	})
 })