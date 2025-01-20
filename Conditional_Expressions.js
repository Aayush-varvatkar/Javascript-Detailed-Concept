// if else statement

let a = 562; // take vallues using prompt
//let b = 55; 

//let a = prompt("enter your age");

if(a==56){
  console.log("you are senior citizen");
}
else if(a<13){
  console.log("you are still a kid");
}
else if(a>=13 && a<18){
  console,log("you are a teenager");
}
  else if(a>=18 && a<30){
    console,log("you are a adult");
  }
else{
  console.log("age is not valid");
}


// ternary opreator

let age = 12;
console.log("you can", (age>18? "Drive" : "not drive"));

// Switch case

let x = "orange";
switch(x){
  case "apple":
  console.log("incorrect");
    break;
  case "mango":
    console.log("incorrect");
    break;
  case "orange":
    console.log("correct");
    break;
  default:
    console.log("invalid");
}