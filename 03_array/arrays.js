// Array -> array me value store ki jaati hai. 
// let arr = [1,2,3,4,5]; // array me ginti(count) 0 se start hota hai 1 se nahi. jaise cricket me first over 0 se start hota hai usi tarah.

// console.log(arr[0]); // result 1
// console.log(arr[1]); // result 2
// console.log(arr[2]); // result 3
// console.log(arr[3]); // result 4
// console.log(arr[4]); // result 5

/* HOW TO MODIFIED ARRAY */
// let arr = [1,2,3,4,5]; //
// arr[3] = 13; // result will be [1,2,3,13,5] 
// console.log(arr);

/* METHOD ARRAY */ //  dot . ke baad kuch likhe aur bracket lagaye to wo method kahlaati hai jaise --> arr.push()
// push value add krta hai sabse last me
// let arr = [1,2,3,4,5];
// arr.push(7000); // result -->  [1,2,3,4,5,7000]
// console.log(arr);

// pop value remove krta hai sabse last wali
// let arr = [1,2,3,4,5];
// arr.pop(4); // result -->  [1,2,3,4]
// console.log(arr);

// shift start wali value remove krta hai
// let arr = [1,2,3,4,5];
// arr.shift(); // result -->  [2,3,4,5]
// console.log(arr);

// unshift start me value add krta hai
// let arr = [1,2,3,4,5];
// arr.unshift(0); 
// console.log(arr); // result -->  [0,1,2,3,4,5]

// splice beech se value remove krta hai, value remove krne ke liye splice ko batana padta hai kaha se kitna aur kya remove krna hai
// let arr = [1,2,3,4,5];
// arr.splice(2,1);  // splice(2, 1) 2 --> kaha se value remove krna hai, 1 --> kitna value remove karna hai
// console.log(arr); // result -->  [1,2,4,5] agar splice(2,2) krte to result aata --> [1, 2, 5]

// slice --> slice original array ko update nhi krta hai ek new array create krke value ko usme update krta hai
// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,3);  // slice(0, 3) 0 --> kaha se hatana se, 3 --> kaha tak hatana hai
// console.log(newarr); // result -->  [1,2,3] agar splice(2,2) krte to result aata --> [1, 2, 5]

// reverse  --> array ko reverse krta hai
// let arr = [1,2,3,4,5]
// arr.reverse();
// console.log(arr);

// sort --> short hamesha ek function accept krta hai
let arr = [11,22,43,84,65]
let sr = arr.sort(function(a,b){
    //return a-b; // ascending order me array ki value milegi -->  [11, 22, 43, 65, 84 ]
    return b-a; // descending order me array ki value milegi -- > [ 84, 65, 43, 22, 11 ]
});
console.log(sr);
