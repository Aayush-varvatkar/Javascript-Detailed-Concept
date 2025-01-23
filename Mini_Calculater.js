let a = prompt('Enter 1st number');
let o = prompt('Enter opreator');
let b = prompt('Enter 2nd number');

switch (o) {
  case '+':
    console.log(a + b + "=");
    break;
  case '-':
    console.log(a - b + "=");
    break;
  case '*':
    console.log(a * b + "=");
    break;
  case '/':
    console.log(a / b + "=");
    break;
  default:
    console.log('Invalid operation');
}