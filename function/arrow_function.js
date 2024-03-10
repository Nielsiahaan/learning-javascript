// no need to write the keyword function
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

// arrow function without parameter
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

// if body arrow function only contain one row
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();
// no need return keyword
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));


// Variable scoping
const multiply = num => {
    total = num * num; // variable global cause didn't use const or let
    return total;
}

let total = 9;
let number = multiply(20);
console.log(total) // 400
