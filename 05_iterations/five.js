// foreach loop

const coding = ["js", "cpp", "java", "py", "rb"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printme(item){
    // console.log(item)
}
// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )
   

const myCoding = [
    {
        languageName: "javascript",
        languagefile: "js"
    },
    {
        languageName: "java",
        languagefile: "java"
    },
    {
        languageName: "python",
        languagefile: "py"
    },
]


myCoding.forEach( (item) => {

    console.log(item.languageName);
} )
