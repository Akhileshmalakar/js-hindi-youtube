// const tinderUser = new Object();     // sinlgeton object hee
const tinderUser = {};      // non-singleton obj hee

tinderUser.id = "12345"
tinderUser.name = "Akku"
tinderUser.IsloggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "Akkumalakar9644@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akku",
            Lastname: "malakar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.Lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const user = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
]

user[1].email
// console.log(tinderUser)



// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('IsloggedIn'));
// console.log(tinderUser.hasOwnProperty('nam'));


//*********d-structue  */
const course = {
    coursename: "js hindi",
    price: "999",
    courseInstructer: "Akku"
}

// course.courseInstructer

const {courseInstructor: instructor} = course;

// console.log(courseInstructer);
console.log(instructor);

// json API
// {
//     "name": "Akhilesh",
//     "CourseName": "js in hindi",
//     "Price": "free"
// }

// arr ke format me api
[
    {},
    {},
    {}
]

