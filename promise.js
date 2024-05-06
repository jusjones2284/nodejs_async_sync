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

const p = Promise.resolve("execution is done"); 
// let p = Promise.reject("execution is rejected");

p.then((val)=> console.log(val));