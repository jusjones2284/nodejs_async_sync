// console.log("task1");
// console.log("task2");


// console.log("Start Operation");


// function sleep(milliseconds){
//   let startTime = new Date().getTime();
//   console.log("operation is running");
//   while(new Date().getTime() < startTime + milliseconds){
//     console.log("in progress");
//   }
//   console.log("operation is done!");
// }

// sleep(1000);


console.log("Start Operation");

function sleeps(milliseconds){
  console.log("operation is running");
  setTimeout(()=>{
    console.log("operation is done!");
  }, milliseconds)
}

sleeps(1000);

console.log("do something else..");


function walk(seconds){
  console.log("operation just started running!");
  setTimeout(()=>{
    console.log("operation is done a second time!");
  }, seconds)
}

walk(2000)

console.log("do something else again");