// Destructuring: sintaksis yang dapat mengeluarkan nilai dari array/object ke dalam satuan yang lebih kecil
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
// const {firstName, lastName, age}= profile
// console.log(firstName, lastName, age)

let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile)
console.log(firstName)
console.log(age);

({firstName, age, isMale} = profile)
console.log(firstName)
console.log(age)
console.log(isMale);

// default value
({firstName, age, isMale = false} = profile)
console.log(firstName);
console.log(age);
console.log(isMale);

// Assigning to different local variable Names
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);