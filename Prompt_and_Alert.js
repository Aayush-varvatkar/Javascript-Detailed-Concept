let a = prompt("Hey whats your age?");
//console.log(typeof a) // type is string
//alert(a);

a = Number.parseInt(a); // convert string into number 

console.log(typeof a); // type is number

if(a==0){
  alert("This is valid age");
};