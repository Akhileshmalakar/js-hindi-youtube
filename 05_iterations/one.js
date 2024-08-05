// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;

//     if(element == 6 ){
//         // console.log("5 is best number");
//     }

//     // console.log(element);

// }



// for (let i = 1; i <= 10; i++) {
//         // console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and innner loop value ${i}`);
//        //console.log(i + '*' + j + ' = ' + i*j); 
//     }
    
// }


// let myArray = ["Rohit", "Dhawan", "Virat"]
// console.log(`myArray.length :- ${myArray.length}`)
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }


// Break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5 `);
//         // break
//         continue
//     } 
//     console.log(`value of i is ${i}`);
    
// }

let myArray = ["Rohit", "Dhawan", "Virat"]

let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}

let score = 1 
do{
    console.log(`Score is ${score}`);
    score++
}while(score <= 10);

