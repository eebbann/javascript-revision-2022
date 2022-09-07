let pi = new Promise((resolve, reject)=>{
	if(true){
		resolve("i am resolved");
	}
	else {
		reject('not resolved');
	}
});

let p2 = Promise.resolve('p2 resolved');
let p3 = ()=> Promise.resolve(null)
let p4 = ()=>

pi.then((res)=>{
	console.log('pop')
})
p2.then((res)=>{
	console.log('polk')
})
p3().then((res)=>{ 
	console.log(res, 'travel to')
})