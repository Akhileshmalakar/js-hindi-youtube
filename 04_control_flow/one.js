// // if 
// const isUserloggedIn = true 

// if( 2 == "2" ){
//     console.log("true");
// } 

// const temperature = 52 
// if ( temperature < 50 ){
//     console.log("less than 50 ");
// }
// else {
//     console.log("temp is greater than 50 ");
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const Balance = 1000 

//if(Balance > 520) console.log("yes True ")


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if(isUserloggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
}