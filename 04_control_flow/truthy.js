const userEmail = []    //"@Akkumalakar511"

if ( userEmail) {
    console.log("Got usere Email ")
}
else{
    console.log("Don't have Email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// Truthy values
//  "0", 'false', " ", [], {}, function(){},

 if (userEmail.length === 0){
    console.log ("Array is empty ");
 }

 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){
    console.log("Objects is empty ");
 }


// Nullish Coalescing Operator (??) : null undefined 

let val1;
// val1 = null ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 165
val1 = null ?? 22 ?? 54

console.log(val1);


//  Terniary Operator 

// condition ? true : false 

const ColdCoffe = 150

ColdCoffe <= 100 ? console.log("Less than 100") : console.log("more than 100")


