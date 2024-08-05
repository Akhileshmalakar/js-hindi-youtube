// forof loop

// [" ", " ", " ",] 
// [{}, {}, {}, {}]

// const arr = [1,2,3,4,4,5]
// for (const num of arr) {
//     // console.log(num);
// }

// const greeting = "Hello fWorld"
// for (const i of greeting) {
//     // console.log(`Each char is ${i}`)
// }


// map
const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United states of America")
map.set(`Fr`, "France")
map.set(`PAK`, "Pakisthan")

// console.log (map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}