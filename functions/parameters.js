// default parameters are passed to the constructor function 	

function meal (name, description,amount=0){ //  the amount parameter has a default value of 0 if not specified 
	if (!name || !description) return false;
    
	  console.log("Loadin" , name , description , amount);
		return true
	}

console.log(meal('fish', 'good'))