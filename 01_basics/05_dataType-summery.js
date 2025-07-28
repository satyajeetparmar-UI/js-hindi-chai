// Primitive 

// 7 Types : string, Number, Boolean, null, undefined, symbol, bigInt
    
// string 
const userName = "Hello Satyajeet";

// Number : 1
const score = 100;

// Boolean : true or false
const isLoggedIn = false // we can use only true or false

// null 
const outTemp = null

// undefined
let userEmail; // value is not defined 

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// bigInt : very very large value 
const bigNumber = 146625466574798798798798n; // here 'n' is representing bigInt. If I will try to remove 'n' editor give me an error.

// Reference or Non Primitive 
    
// Array : []
const heros = ["ironman", "thor", "hulk", "spiderman"]

// objects : {}
let myinfo = {
    name: "satyajeet",
    age: 22,
}

// functions
const myfunction = function() {
    // console.log("Hello function");
}


console.log(typeof outTemp);


