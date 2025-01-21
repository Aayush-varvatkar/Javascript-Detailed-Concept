let num = [1, 22, 3, 44, 5, 66, 79];
/*
for(let i=0; i<num.length; i++){
  console.log(num[i]);
}
*/

//For Each loop
num.forEach((element)=> {
 console.log(element * element);
})

// For of loop
for(let item of  num){
  console.log(item);
}

// For in loop
for(let i in num){
  console.log(i)
}

//Array.from
let name = "Aayush"
let conv = Array.from(name)
console.log(conv)
