
// ******************** DATA Type *********************

//  there are Two types 
//  1. Primitive
//  2. Non-primitive(Reference) 



// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint
// EX.
const score = 100;  // Number defined
const scoreValue = 100.43   // Number defined

const isLoggedIn = false    // boolean type

const outsideTemp = null    // null

let userEmail;  // undefined type

const id = Symbol('123');   // Symbol types
const anotherId = Symbol('123');    // dono me value same he but return false ayga 

const bignumber = 541897641568455n;     // Bigint type



// Non-primitive(Reference)
// Types : Array, Object, Functions

const heros = ["Akku", "Ak", "MAa"];    // array 

let myObj = {
    name : "Akku",
    age : 18,
    // curli basis ke ander jitni bhi values he wo Objects he, data type kuch bhi skta he
}


const myFunction = function(){
    console.log("Hello word");      // function(){} : ye simple declear
}

console.log(typeof bignumber);




