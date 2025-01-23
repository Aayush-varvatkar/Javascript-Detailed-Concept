let ran_num = Math.ceil(Math.random() * 100);
let guess = prompt("Guess the number");
let count = 0;
while(ran_num != guess){
  count = count + 1;
  if(ran_num > guess){
    console.log("Opps! Try greater number");
  }
  else if(ran_num <guess){
    console.log("Opps! Try smaller number");
  }
  guess = prompt("Guess the number");
}
console.log("Congratulations! You guessed the correct number");
console.log("Your took " + count + " chances to guess the correct number");
console.log("Your score is " + (100 - count));
