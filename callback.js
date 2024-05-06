console.log("Task Start1");

// function asyncTask(cb){
//   console.log("Task running");
//   setTimeout(cb, 2000)

// }

// asyncTask(()=> console.log(name))
// console.log("Task end");
// const name = "Jus";

function asyncTask1(cb){
  console.log("inside the function3");
  setTimeout(()=> {
    cb(null, "This the data from server6")
  }, 0)
  console.log("second inside4");
}
console.log("here2");
asyncTask1((err, data)=>{
  if(err){
    throw err; 
  }else{
    console.log("data: ", data);
  }
})
console.log("the end5");