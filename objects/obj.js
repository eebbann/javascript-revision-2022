let cat = {"pop":"dog","cat":"puppy"}
const lists=[{"name":"test","type":"string"},cat]
cat["lop"] = 12

let main = {"pop":"bottle","crack":"eggs"}
lists.push(main)
main.pop = "pooop"
lists[0].name = "pkj"
console.log(lists) ;

//objects do not have length property so we need to use for in loop

for (let prop in cat) {
	console.log(cat[prop]) ;
}

