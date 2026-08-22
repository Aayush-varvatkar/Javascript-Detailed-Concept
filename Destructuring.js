// Destructuring is a way to take values out of an array or properties out of an object and store them directly into variables.



// Destructuring in Array..

// let numarr = [10, 20,30, 40, 50];
// let [a] = numarr;
// console.log(a);





// Destructuring in object..

// let user = {
//     name:"Aayush",
//     age: 21,
//     city:"Mumbai"
// };
// let {name} = user;
// console.log(name);






// Destructuring in functions...

let displayuser = ({username, userage, usercity}) =>{
    console.log(username);
    console.log(userage);
    console.log(usercity);
};

let employee1 = {
    username:"Sarthak",
    userage: 28,
    usercity:"Mumbai"
}
let employee2 = {
    username:"Aayush",
    userage: 21,
    usercity:"pune"
}
let employee3 = {
    username:"amit",
    userage: 15,
    usercity:"mern"
}

displayuser(employee1);
displayuser(employee2);
