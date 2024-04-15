const user = {
    username: "Akku",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMassage();
// user.username = "Akhilesh"
// user.welcomeMassage();

// console.log(this);

// this key word object ke under ke function pr kam ktrta he bs  

// function chai(){
//     username: "Pappu"   // function ke under this key word kam nhi krta 
//     console.log(this.username);
// }
// chai();


// const chai = function(){
//     username: "Pappu" 
//     console.log(this.username)
// }
// chai()

//****Arrow finctions *****
//  () => {}
// const chai = () => {
//     username: "Pappu" 
//     console.log(this.username)
// }
// chai()



// const addNumber = (num1,num2) => {
//     return num1+num2;
// }
    //  {} -> esme return krna pdega

// const addNumber = (num1,num2) => num1+num2

// const addNumber = (num1,num2) => (num1+num2)

const addNumber = (num1,num2) => ({username: "Pappu"})


console.log(addNumber(3, 9));