// function declarations aise bante hai
/*function abcd () {
    // code here
} */

// function expression aise bante hai 
// variable me save karne ko function expression kahte hai
/*let functionName = function () {
    // code yaha likhna hai
} */

// fat arrow function ya arrow function 
// () fat, => arrow, {} function ye teeno ko ek sath mila dete hai to syntex kuch is tarah banta hai ()=>{}
/* let abcd = () => {
    // code yaha likhna hai
} */

// ==========================================

// Parameters vs arguments

// function dance (dancerName) {
//     console.log(`${dancerName} nach raha hai!`);
// }

// dance('Mor');

// function add (value1, value2) { // yaha pr jo value hoti hai wo parameter hoti hai jaise yaha abhi value1 aur value2 hai
//     console.log(value1 + value2);
    
// }

// add(54, 89); // function ko export krte time bracket me jo value rahti hai ya di jaati hai wo arguments hoti hai


// ==========================================

// Default Parameters

// function add (value1 = 0, value2  = 0) { // agar user koi value add nahi krta hai to hum is tarah se default value define kr sakte hai
//     console.log(value1 + value2);
    
// }

// add(); // dafult value yaha render hogi abhi jaise 0 value di hai to 0 + 0 = 0; result ayega.
// add(5 + 5) // yaha value add kr denge to iska result 0 nahi 5 + 5 = 10 ayega.


// Rest Parameters

// jab argument kai sare ho to hamein utne hi parameters banane padenge, isse bachne ke liye hum rest ka use krte hai rest ka sybol hota hai ... and ... function ke parameter me lage to wo rest operator hota hai
/*
function add (...value) { // rest operator is tarah se use hota hai.
    console.log(value);
}

add (1,2,3,4,5,6,7,8,9,10) // iska result ayega [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
*/
