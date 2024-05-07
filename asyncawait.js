const userLogin = ()=>{
  console.log("Enter Username and Password");
  let username = prompt("Enter username: ");
  let password = prompt("Enter password: "); 

  return new Promise((resolve, reject) =>{
    setTimeout(()=> {
      console.log("Performing User Authentication");
      if(username === "Justin" && password === "Justin")
        resolve("User Authenticated!");
    } 

    ), 1000})}


    function goToHomePage(userAuthStatus){
      return Promise.resolve(`Go to Homepage as : ${userAuthStatus}` )

    }

    userLogin()
      .then((response) =>{
        console.log("Validated User");
        return goToHomePage(response)
      })
      .then((userAuthStatus) => {
        console.log(userAuthStatus);
      })

