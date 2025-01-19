//Expressions
77;
"Aayush";
console.log(77);
console.log("Aayush");

/* Arithemetic Operators
+ - Addition
- - Subtraction
* - Multiplication
/ - Division
** - Exponentiation - Power
% - Modulus - Remainder
++ - Increment
-- - Decrement */

let a = 37;
let b = 3;

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);

console.log("a ** b = ", a**b); // a to the power b
console.log("a % b = ", a%b); // Remainder

console.log("a++ = ", a++); // first print then increment
console.log("a = ", a); // incremented value

console.log("++a = ", ++a); // first increment then print

console.log("a-- = ", a--); // first print then decrement
console.log("a = ", a); // decremented value

console.log("--a = ", --a); // first decrement then print

/* Assigment opretors
= - x = y
+= - x = x+y
-= - x = x-y
*= - x = x*y
/= - x = x/y
%= - x = x%y
**= - x = x**y */

let c = 10;
c += 5; // Same as c = c+5
console.log("c = ", c);

c -= 5;
console.log("c = ", c);

c *= 5;
console.log("c = ", c);

c /= 5;
console.log("c = ", c);

c %= 3;
console.log("c = ", c);

c **= 5;
console.log("c = ", c);

/* Comparison Operators
== - Equal to
!= - Not equal 
=== - Equal value and type
!== - Not equal value or not equal type
> - Greater than
< - Less than
>= - Greater than or equal to
<= - Less than or equal to
? - Ternary operator */

let comp1 = 10;
let comp2 = 5;

console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);

console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 < comp2 is", comp1 < comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2);

// === and !==
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);

let comp3 = 7;
let comp4 = "7";
console.log("comp3 === comp4 is ", comp3 === comp4);
console.log("comp3 !== comp4 is ", comp3 !== comp4);

/* Logical Operators
&& - Logical and
|| - Logical or
! - Logical not */

let x = 5;
let y = 6;

console.log(x>y && x==5);
console.log(x<y && x==5);

console.log(x>y || x==5);
console.log(y<x || y==7);

console.log(!true);
console.log(!false);