// let id = 8
// let root = 'http://jsonplaceholder.typicode.com/users/'+id

// fetch(root).then((res)=>{ console.log(res)
// 	if(res.status === 200){
// 	return res.json()}
// else{
// 	throw new Error(".invalid content")
// } })
// .then((data)=>console.log(data))
//===========================================================================================

//promise --
// let p1 = new Promise((resolve, reject)=>{
// 	if (true){
// 		resolve(window.open(URL)) 
// 	}else{
// 		reject('pi wed')
// 	}
// })
// let p2 = Promise.resolve('pop')
// p1.then=((result)=>{
// 	console.log('kli', result)
// })
//===========================================================================================
//promise.all 

const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)


  })
}

// Resolving a normal promise.
timeOut(1000)
 .then(result => console.log(result)) // Completed in 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(9000)])
 .then(result => console.log(result))