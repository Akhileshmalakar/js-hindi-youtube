const myNumber = [ 1,2,3,4,5,6,7,8 ]

// const newNums = myNumber.map( (num) => num + 5 )
// console.log(newNums)


const newNums = myNumber
    .map( (num) => num * 10 )
    .map( (num) => num + 1 )
    .filter( (num) => num >= 31 )

console.log(newNums)

