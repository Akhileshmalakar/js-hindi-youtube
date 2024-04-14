// let a = 20
// const b = 30
// var c = 50

// its globle scope 
// var c = 300; 

let a = 500;
if(true){

    // if ke jo bhi likha he wo he block scope
    // if ke bahar jo bhi lika he wo he globle scope 

    let a = 20;
    const b = 30;
    var c = 50;
    // console.log("if ke under ki value:",a);
}

//console.log(a);
// console.log(b);
// console.log(c);


function one(){

    const username = "Akku";

    function two(){
        const lastName = "Malakar"
        // console.log(username)
    }
    // console.log(lastName);

    two()
}
one()


if(true){
    const username = "Akku"
    if(username === "Akku"){
        const website = " Baba"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++interasting++++++++++++++
// ******hoisting in js******

// console.log(addone(5))   // ye exicute hoga 
function addone(num){
    return num + 1;
}
console.log(addone(8))



// console.log(addtwo(4))   // ye exicute nhi hoga 
const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(4))


