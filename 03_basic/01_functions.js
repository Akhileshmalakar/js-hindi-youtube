
function sayMyname(){

    console.log("A")
    console.log("k")
    console.log("k")
    console.log("u")
}

// sayMyname()

// function addTwoNumbar(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNumbar(4,6)

// function addTwoNumbar(num1,num2){
//     let result = num1+num2
//     return result
// }

// const result = addTwoNumbar(4,5)
// console.log("Results: ",result)


function loginUserMessage(username = "sam"){
    // if(username == undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Akku"))
// console.log(loginUserMessage("Akku"))

function calculateCardPrice(val1, val2, val3, ...num1){   // (...num) Rest operater he -> (...)
    return num1
}
// console.log(calculateCardPrice(100,200,300,400,500))


const user = {
    username: "Akku",
    price: 999,
}

function handleObjects(anyobjedct){
    console.log(`username is ${anyobjedct.username} and price is ${anyobjedct.price}`);
}
// handleObjects(user)
handleObjects({
    username: "sam",
    price: 99,
})


const myNewArray = [200,300,400,600]

function returnSecondvalue(getArray){
    return getArray[2]
}
console.log(returnSecondvalue(myNewArray))


