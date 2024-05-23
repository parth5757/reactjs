//  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // it will automatically take that self as the undefined value

// Symbol
const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3456543576654356754n


// other data types
// Reference Data Types (Non Primitives)

// Arrays
const heros = ["Shaktiman", "nagraj", "doga"]


// objects 
let myObj = {
    name: "parth",
    age: 22,
}

console.log(myObj.name)


const myFunction = function(){
    console.log("Hello World");
}


// to check type od javascript
console.log(typeof outsideTemp)// check all data type od value which are been written here