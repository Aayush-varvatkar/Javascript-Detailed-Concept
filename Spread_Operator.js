// Spread operator --  copy all values into variable                 expands arrays, objects, or strings into individual elements..

let numbers = [12, 23, 34, 45, 56, 56, 67, 78, 89, 90];
let num = [...numbers, 45, 56, 67];
console.log(num);





//      If it's collecting → REST  
// let [first, ...remaining] = numbers;


//      If it's unpacking → SPREAD
// let newArray = [...oldArray];