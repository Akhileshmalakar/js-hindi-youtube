// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`Acc ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )


const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "DSA course",
        price: 5999
    },
    {
        itemName: "js course",
        price: 4999
    },
    {
        itemName: "Java course",
        price: 6999
    },
    {
        itemName: "web course",
        price: 3999
    },
    {
        itemName: "full stack",
        price: 8999
    },
    {
        itemName: "app develempment",
        price: 7999
    },    
]
// console.log(shoppingCart)

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(`Total All course price is ${priceToPay}`)



