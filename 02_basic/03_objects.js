// singleton 


// object literals

const mySym = Symbol("Key1");

const jsUser = {
    name: "Akku",
    "full name": "Akhilesh malakar",
    [mySym]: "mykey1",
    age: 21,
    location: "khandwa",
    email: "akhileshmalakar.com",
    isloggedin: false,
    lastloginDays: ["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "akkugoogle1234.com"
// Object.freeze(jsUser);
jsUser.email = "pappugoogle123.com"
// console.log(jsUser);


//*******Functions********//
jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());