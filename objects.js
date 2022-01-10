console.log(' ')
console.log('**********OBJECTS STARTS HERE**********')
//OBJECTS
// in objects we use curly brackets called object literals
const fitBitData = {
		totalSteps: '9,291',
		totalMiles: '3,287',
		avgCalories: '973',
		avgDistance: '16.2',
		avgMinutes: '25.1',
		45: '9,291',
}

console.log(fitBitData.totalSteps);
console.log(fitBitData.totalMiles);
console.log(fitBitData.avgCalories);
console.log(fitBitData.avgDistance);
console.log(fitBitData.avgMinutes);
console.log(fitBitData[45]);//to access a non string value

//when to use commas in objects
  //- when you have more than one key value pair
	//- when you have more than one line of code
	// separating the key value pairs with commas is common practice

	const numb ={
		100 : 'one hundred',
		200 : 'two hundred',
		'300g' : 'three hundred',
	}
	console.log(numb['300g']);

	//when to use quotes in objects
	//- when you have a key that has a space in it
	//- when you have a key that has a special character in it
	//- when you have a key that has a number in it

	const myObj = {
		'My dog': 'Fido',
		'My cat': 'Fluffy',
		'My hamster': 'Harold',
		3: 'three',
	}
	console.log(myObj['My dog']);
	console.log(myObj['My cat']);
	console.log(myObj['My hamster']);
	console.log(myObj[3]);

	 
 //adding properties to objects
	const myOb = {};
	myOb.name = 'John';
	myOb.age = '27';
	myOb.hobby = 'coding';
	myOb.isMarried = 'no';
	console.log(myOb);

	//adding properties to objects
	const myObe = {};
	myObe['name'] = 'John';
	myObe['age'] = '27';
	myObe['hobby'] = 'coding';	
	myObe['isMarried'] = 'no';
	console.log(myObe);

	//calculation in objects
	const my = {};
	my['name'] = 'John';
	my['age'] = '27';
	my['hobby'] = 'coding';
	my['isMarried'] = 'no';
	my['calcAge'] = function(){
		return 2021 - this.age;
	}
	console.log(my.calcAge());
 
	//nesting objects
	const ebanObj = {
		name: 'John',
		age: 27,
		hobby: 'coding',
		isMarried: false,
		family: ['Jane', 'Mark', 'Bob', 'Emily'],
		address: {
			street: '50 Main st',
			city: 'Boston',
			state: 'MA'
		}
	}

	console.log(ebanObj);
	console.log(ebanObj.address['city']);

	//referencing nested objects
	const myBj = {
		name: 'John',
		age: 27,
		hobby: 'coding',
		isMarried: false,
		family: ['Jane', 'Mark', 'Bob', 'Emily'],
		address: {
			street: '50 Main st',
			city: 'Boston',
			state: 'MA'
		}
	}

	const myObjRef = myBj;
	console.log(myObjRef.address.city);

