// Immediately Invoked Function Expression (IIFE)

(function chai (){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Simple iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('Akku');