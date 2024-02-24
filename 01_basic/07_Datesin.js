//  Dates   

let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof mydate);



// let myCreateDates = new Date(2001, 7, 31);
// console.log(myCreateDates.toDateString());

// let myCreateDates = new Date("2001-08-31")
// let myCreateDates = new Date("08-31-2023");
// console.log(myCreateDates.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDates.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMonth());



newDate.toLocaleString('default', {
    weekday: "long",
    
})