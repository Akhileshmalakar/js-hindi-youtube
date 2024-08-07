// filter 

const myNumber = [1,2,3,4,5,6]

// let newNums =  myNumber.filter( (num) => num > 3 )
// const newNums =  myNumber.filter( (num) => {
//    return num > 3
// } )
// console.log(newNums);


// const newNums = []
// myNumber.forEach( (num) => {
//     if(num > 3){
//         newNums.push(num);
//     }
// });

// console.log(newNums);


const book = [
    {
        titile: `Book one`, genre: `fiction`, publish: 1981, edition: 2004
    },
    {
        titile: `Book Two`, genre: `History`, publish: 1981, edition: 2000
    },
    {
        titile: `Book Three`, genre: `Maths`, publish: 1987, edition: 1991
    },
    {
        titile: `Book Four`, genre: `Science`, publish: 2009, edition: 2014
    },
    {
        titile: `Book Five`, genre: `History`, publish: 1986, edition: 1996
    },
]

let UserBook = book.filter( (bk) => bk.genre === 'History' )
    UserBook = book.filter( (bk) => { 
        return bk.publish >= 1985 && bk.genre === "History"
    } )

console.log(UserBook);