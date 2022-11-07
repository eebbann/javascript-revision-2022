function higher (f){
return f()

}

higher(make())

function make(){

	console.log("maka why not")
	return LockManager=()=> console.log("hung")
}