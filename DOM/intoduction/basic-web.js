//javascript has 13 nodes 
//major three includes
//comments
//elements
//attributes

let names = movies.join(", ")
console.log(names)
let p = document.getElementById('para')
console.log(p)

p.innerHTML= names;


let ps = document.querySelectorAll('.main p')

for(let i =0, num = ps.length; i < num; i++){
	ps[i].textContent += " kinko";
}
