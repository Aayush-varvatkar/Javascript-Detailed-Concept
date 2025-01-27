let obj = {
    name: 'John',
    age: 30
};
console.log("My name is " + obj.name + " and I am " + obj.age + " years old");

// Using Template Literals

// console.log(`My name is ${obj.name} and I am ${obj.age} years old`);
let output = `My name is ${obj.name} and I am ${obj.age} years old`;
console.log(output);
console.log(typeof output);