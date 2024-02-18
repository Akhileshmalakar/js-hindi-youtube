// String diclrear
const name = "Akku";
const repoCount = 50
const repo = 78

// console.log(name)

// console.log(name + repoCount + "value");

console.log(`Hyy my name is ${name} and my repo count is ${repoCount} and my repo is ${repo}`);

// String syntex
const gameName = new String(`akku-aakk`)
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));


const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-3, 2);
console.log(anotherString);

const newStringOne = "   Pappu   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://akku.com/akhilesh%30malakar";
console.log(url.replace('%30', '-'));
console.log(url.includes("akku"));

console.log(gameName.split('-'));