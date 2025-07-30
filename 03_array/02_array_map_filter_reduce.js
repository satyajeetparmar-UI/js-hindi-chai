/* forEach har ek value ke liye function ko run karega */
// let arr = [15,26,48,8,32,4];
// arr.forEach(function(val){
//     // console.log(val); yaha pr normal jo value rahegi wo print karega 
//     // console.log(val + 5); yaha har value me 5 add krega and result rahega 20, 31, 53, 70, 37, 9
// })


/* MAP --> map sirf tab use krna hai jab apne ko ek naya array banana hai pichle array ke data ke basis pr  */

// MAP ka use --> jab bhi apko koi aisa case dikhe jaha ek array se naya array banega and wo naya array kuch value ko rakhega tab map lagega 

// map dekhte hi man me ek blank array bana liya kro 
// map original array ko update nahi krta hai new variable me map ki value save krni padti hai
// let arr = [15,26,48,8,32,4];
// let newarr = arr.map(function(val){ 
//     // return 12; // jo bhi yaha return karwana hai wo karwa sakte hai 
//     if (val > 10) return val; // result --> [ 15, 26, 48, undefined, 32, undefined ] undefined isliye kyunki else me kuch define nahi kiya hai
// })
// console.log(newarr); // result --> [ 12, 12, 12, 12, 12, 12 ]



/* Filter --> map ki tarah hi work krta hai bas return true or false krta hai */
// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(function(val){
//     if(val > 4) return true;
// })

// console.log(newarr); // result --> [ 5, 6, 7, 8, 9 ]

/* Reduce --> reduce array ke andar jitni bhi value aa rahi h unko ek value me jod deta hai */
let arr = [1,2,3,4,5,6];
let ans = arr.reduce(function(accumulator, val) { // accumulator apni value yaad rakhta hai 
    return (accumulator + val); // ye is tarah se chalega --> 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21, 
}, 0) // 0 accumulator ki default value 

console.log(ans); // result --> [ 21 ]


