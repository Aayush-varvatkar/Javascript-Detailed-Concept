let num = [1,2,3,5,55,64,58];
console.log(num);





/* tostring() and join() methods

let b = num.toString();
console.log(b);

let c = num.join("_");
let d = num.join(" and ");
console.log(c, d); 
*/





//pop() method        // removes last element from array

/*
console.log(num)
let r1 = num.pop() // returns the popped element
console.log(r1)
*/





//push() method      // adds new element at the end of array

/*
console.log(num)
let r2 = num.push(89);
console.log(num, r2)
*/





//shift() method     // removes first element from array

/*
console.log(num)
let r3 = num.shift() // returns the shifted element
console.log(r3)
*/






// unshift(); method        // adds new element at the beginning of array

/*
let add = num.unshift(44); // returns the new length of the array
console.log(num);
*/





// concat() method           // joins two or more arrays

/*
let hero1 = ["Spiderman", "Batman", "Superman", "Antman"];
let hero2 = ["vulture", "albedo", "gobline", "Thanos"];

let newHero = hero1.concat(hero2);
console.log(newHero);
*/





//slice() method           // extracts a section of an array and returns it as a new array
//slice(strinx, endidx);

/*
let hero1 = ["Spiderman", "Batman", "Superman", "Antman", "vulture", "albedo", "gobline", "Thanos"];
console.log(hero1.slice(2,4));
*/






//  Array from
// document.getElementsByClassName("class-name")
// let  a = document.getElementsByClassName("class-name")
// Array.from(a)