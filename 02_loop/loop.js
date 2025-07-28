// Q.1 Print 1 to 10 using for loop
// for (let i=0; i<11; i++) {
//     console.log(i)
// }

// Q.2 Print 10 to 1 using loop
// e.g. for loop 
// for (let i=10; i>0; i--) {
//     console.log(i)
// }

// e.g. while loop
// start
// while(end){
// code
//}
// let i=10;
// while (i>0) {
//     console.log(i--);
    
// }

// Q.3 Print even number from 0 to 20 using for loop
// for (let i=1; i<21; i++) {
//     if (i%2 === 0) {
//         console.log(i)
//     }
// }

// Q.4 Print odd number from 1 to 15 using while loop
// let i = 1;
// while (i<16) {
//     if (i%2 === 1) {
//         console.log(i)
//     }
//     i++;
// }

// Q.5 Print table of 5
// for (let i = 1; i < 11; i++) {
//     console.log(`5 * ${i} = ${ 5* i}`);  
// }

// Q .6 Find sum of number 1 to 100

let sum = 0;

for (let i = 0; i <101; i++) {
    sum = sum + i   // Har step par, sum me i add kiya ja raha hai.
    
    /* 
    
        Example:
        i = 0 → sum = 0 + 0 = 0
        i = 1 → sum = 0 + 1 = 1
        i = 2 → sum = 1 + 2 = 3
        i = 3 → sum = 3 + 3 = 6
        ...
        i = 100 → final sum = 5050
    
    */ 
}
console.log(sum);

