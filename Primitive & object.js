/* 7 primitive datatypes 
N - null
N - number
S - Symbol
S - string
B - boolean
B - bigint
U - undefined */
let a = null;
let b = 345;
let c = Symbol("I am a nice symbol");
let d = " Aayush "
let e = true;
let f = BigInt("567") + BigInt("3")
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);
console.log(typeof a);
console.log(typeof e);

// obects in js
const item = {
  "Aayush": true,
  "baka": "Kazuto",
  "Izumi": 66,
  "Kazuto": undefined,
  "Hinge": false
}
console.log(item["Aayush"]);
console.log(item["baka"]);
