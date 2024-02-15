const accountID = 12345;
let accountEmail = "Akkumalakar9644@gmail.com";
var accountpassword = "12345";
accountCity = "khandwa";
let accountstate;

// accountID = 2;  // Not allowed

console.log(accountID);
console.log(accountEmail);
console.log(accountpassword);
console.log(accountCity);


// variable ki value change kar ke dekhte he
accountEmail = "akmalakar12345@";
accountpassword = "43321";
accountCity = "Indore";

 // table ka use karke output print krna 
console.table([accountEmail,accountpassword,accountCity,accountstate]);


// prefer not to use var 
// because is issue is block scope and functional scope
// so use only let  
 

