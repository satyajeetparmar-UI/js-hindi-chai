// Looping in object for-in, Object.keys, Object.entries

// Object pr loop kaise banaya jata hai
// let userDetails = {
//     name: 'John',
//     age: 24,
//     email: 'test@email.com',
// }

// for (let val in userDetails) {
//     // console.log(val); // expected result --> name, age, email
//     // console.log(userDetails[val]); // expected result --> John, 24, test@email.com
//     console.log(`${val} : ${userDetails[val]}`); // expected result --> name : John, age : 24, email : test@email.com
// }

// Object.keys kaise kaam karta hai

// let userDetails = {
//     name: 'John',
//     age: 24,
//     email: 'test@email.com',
// }

// console.log(Object.keys(userDetails)); // expected result [ 'name', 'age', 'email' ]


// Object.entries kaise kaam karta hai --> ye hamare object ka array bana deta hai

let userDetails = {
    name: 'John',
    age: 24,
    email: 'test@email.com',
}

console.log(Object.entries(userDetails)); // expected result [ [ 'name', 'John' ], [ 'age', 24 ], [ 'email', 'test@email.com' ] ]


