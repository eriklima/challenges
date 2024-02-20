const arr = [5.25, 6, 7.89, 1.0, 9.71, 2]

const data = {
    FirstName: "Erik",
    LastName: "Lima",
    Title: "Software Engineer",
    Field: {
        Name: "Computer Science",
        Time: 15,
    },
}

// Use the Reduce function to find the largest value in the array
const high = arr.reduce((last, next) => {
    return last > next ? last : next
})
console.log(high)

// Use the Deconstruction Method to get first and last name
const { FirstName, LastName } = data
console.log(FirstName, LastName)

// Use the String Interpolation to print the first and last name
console.log(`First name: ${FirstName}, Last Name: ${LastName}`)

// What is the difference between "Array.findIndex" and "Array.indexOf"?
let index = arr.findIndex((value, index) => value == 2)
console.log(`findIndex: ${index}`)

index = arr.indexOf(2)
console.log(`indexOf: ${index}`)

// Extra: "Array.find" returns the value, not the index
const value = arr.find((value, index) => value % 2 == 0)
console.log(`find: ${value}`)

// How to define a "Default Parameter" in a function?
function log(value, base) {
    // Check the "base" parameter is "undefined"
    base = typeof base === "undefined" ? 2 : base

    console.log(`Log base ${base}`)

    // continue...
}
log(16)

/*
What is the difference between node.js require and ES6 import and export?

Nodejs require:
Require is Non-lexical, it stays where they have put the file.   
It can be called at any time and place in the program.           
You can directly run the code with require statement.            
If you want to use require module then you have to save file with ‘.js’ extension.	

ES6 import and export:
Import is lexical, it gets sorted to the top of the file.
It can’t be called conditionally, it always run in the beginning of the file.
To run a program containing import statement you have to use experimental module feature flag.
If you want to use import module then you have to save file with ‘.mjs’ extension.
*/
