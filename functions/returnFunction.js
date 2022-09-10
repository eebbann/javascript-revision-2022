//return statements in function  specifies the function to be executed.

function getFunction() {
 return function() {
        return arguments[0];
    };
		}
 
		function getFunctionWithArgs(args) {
   if (args.length > 1) {
		return true;
		}
		else {
			return false;
			}
			}

		console.log(`getFunctionWithArgs :`,	getFunctionWithArgs(8))