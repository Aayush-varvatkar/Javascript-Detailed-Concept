// Rest operator- collects /copy the remaining values into variable..          -- used with destructuring  


//rest operator with array
/* 
 let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];   -- used with destructuring
    let [a ,b, c, d,  ...rest] = numbers;

    console.log(rest);
*/


//rest operator with object
/*
    let user = {
        name: "Aayush",
        age: 21,
        city: "Mumbai",
        company: "WEboutreach",
        position: "Founder",
        profit: "None"
    }
    let {name, company, ...rest} = user;
    console.log(company, rest);
*/



//rest operator with function..         -- infinite..

const displayProduct = (...product) => {
    console.log(product);
}
displayProduct("Monuse", "Keyboard", "TV", "Monitor", "Laptop");
