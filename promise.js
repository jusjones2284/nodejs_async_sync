// const promise = new Promise((resolve, reject)=>{
//   console.log("Async task execution");
//   if(false){
//     const person = {name: "Justin"}
//     resolve(person)
//   } else{
//     const error = {errCode: "1001"}
//     reject(error)
//   }
// })
// console.log("first");
// promise.then(
//   (me)=>{
//     console.log(me);
//   },
//   (e)=>{
//     console.log(e);
//   }
// )

// const promise1 = new Promise((resolve, reject)=>{
//   console.log("Async task execution");
//   if(false){
//     const persons = {
//       name: "Justin Mickal",
//       Job: "software developer"
//     }
//     resolve(persons)
//   }else{
//     const error = {errCode: "1005"}
//     reject(error)
//   }
// })

// promise1.then(
//   (data)=>{
//     console.log(data);
// },
//  (e)=>{
//   console.log(e);
// }
// ).catch(()=> console.log("failed"))

// const p = Promise.resolve("execution is done"); 
// // let p = Promise.reject("execution is rejected");

// p.then((val)=> console.log(val));

// function asyncTask(){
//   return Promise.resolve();
// }
// console.log("first");
// asyncTask().then(()=>{
//   console.log(name);
// })

// const name = "jus"

//promise chain 

// const p = Promise.resolve("done");
// p.then((val) => {
//   console.log(val);
//   return "done2"
// }).then((val)=>{
//   console.log(val);
//   return "done3"
// }).then((val)=>{
//   console.log(val);
//   return "done4"
// }).then((val) => console.log(val))
// .catch((val) => console.log(val))

// console.log("hello world");

// const ps = Promise.reject("failed"); 
// ps.then((val)=>{
//   console.log(val);
//   return "done2"
// }).then((val)=>{
//   console.log(val);
//   return "done3"
// }).catch((val)=> console.log(val))

const makeApiCall = (time)=>{
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{
      resolve("This API executed in: " + time)
     }, time)
  })
};

makeApiCall(1000).then((val) => console.log(val));

let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(3000)]